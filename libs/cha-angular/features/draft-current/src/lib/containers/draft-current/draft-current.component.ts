import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { first, Observable } from 'rxjs';

import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { DraftTableDto, TeamDto } from '@cha/shared/api';
import { DraftCurrentFacade } from '../../+state/draft-current.facade';

@Component({
  selector: 'cha-ang-draft-current',
  templateUrl: './draft-current.component.html',
  styleUrls: ['./draft-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftCurrentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftTableItems$: Observable<DraftTableDto[]>;
  teams$: Observable<TeamDto[]>;

  teams!: TeamDto[];

  tableColumns = [
    { field: 'pickNumber', header: 'Pick #' },
    { field: 'team', header: 'Team' },
    { field: 'round_one', header: 'Round 1' },
    { field: 'round_two', header: 'Round 2' },
    { field: 'round_three', header: 'Round 3' },
    { field: 'round_four', header: 'Round 4' },
    { field: 'round_five', header: 'Round 5' },
  ];

  filteringOptions = [
    'team',
    'round_one_team',
    'round_two_team',
    'round_three_team',
    'round_four_team',
    'round_five_team',
  ];

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private draftCurrentFacade: DraftCurrentFacade
  ) {
    this.isLoading$ = this.draftCurrentFacade.isLoading$;
    this.isLoaded$ = this.draftCurrentFacade.isLoaded$;
    this.draftTableItems$ = this.draftCurrentFacade.draftTable$;
    this.teams$ = this.leagueDataFacade.leagueTeams$;
  }
  ngOnInit(): void {
    this.draftCurrentFacade.getDraftTable();
    this.teams$
      .pipe(first())
      .subscribe((teams: TeamDto[]) => (this.teams = teams));
  }

  mapItems(items: DraftTableDto[]) {
    return items.map((item: any) => ({
      ...item,
      team: `${item.city} ${item.nickname}`,
      teamImg: this.getString(item.teamlogo),
      round_one_team: this.getTeamName(item.round_one),
      round_two_team: this.getTeamName(item.round_two),
      round_three_team: this.getTeamName(item.round_three),
      round_four_team: this.getTeamName(item.round_four),
      round_five_team: this.getTeamName(item.round_five),
    }));
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getTeamName(teamNum: number): string {
    const found = this.teams.find((team: TeamDto) => team.id === teamNum);

    if (found) {
      return `${found.city} ${found.nickname}`;
    } else {
      return ``;
    }
  }
}
