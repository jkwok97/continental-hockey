import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { DraftPickDto, TeamDto } from '@cha/shared/api';
import { Observable } from 'rxjs';
import { DraftSummaryFacade } from '../../+state/draft-summary.facade';

@Component({
  selector: 'cha-ang-draft-summary',
  templateUrl: './draft-summary.component.html',
  styleUrls: ['./draft-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftSummaryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftPicks$: Observable<DraftPickDto[]>;
  teams$: Observable<TeamDto[]>;

  teams!: TeamDto[];

  tableColumns = [
    { field: 'draft_year', header: 'Year' },
    { field: 'draft_round', header: 'Round' },
    { field: 'draft_overall', header: 'Overall' },
    { field: 'player', header: 'Player' },
    { field: 'team', header: 'Team' },
  ];

  filteringOptions = [
    'draft_year',
    'draft_round',
    'draft_overall',
    'player',
    'team',
  ];

  constructor(
    private draftSummaryFacade: DraftSummaryFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.draftSummaryFacade.isLoaded$;
    this.isLoading$ = this.draftSummaryFacade.isLoading$;
    this.draftPicks$ = this.draftSummaryFacade.draftPicks$;
    this.teams$ = this.leagueDataFacade.leagueTeams$;
  }

  ngOnInit(): void {
    this.draftSummaryFacade.getDraftPicks();
  }

  mapItems(items: DraftPickDto[]) {
    return items.map((item: DraftPickDto) => ({
      ...item,
      team: `${item.city} ${item.nickname}`,
      player: `${item.firstname} ${item.lastname}`,
      playerImg: this.getPlayerPicture(item.nhl_id),
      teamImg: this.getString(item.teamlogo),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getPlayerPicture(id: number) {
    if (id) {
      return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@2x.jpg`;
    } else {
      return;
    }
  }
}
