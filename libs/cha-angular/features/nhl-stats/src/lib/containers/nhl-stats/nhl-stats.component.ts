import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { NhlGoalieStatDto, NhlPlayerStatDto, TeamDto } from '@cha/shared/api';
import { Observable } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-ang-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  styleUrls: ['./nhl-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  teams$: Observable<TeamDto[]>;
  stats$: Observable<NhlPlayerStatDto[] | NhlGoalieStatDto[]>;

  selectOptions = [
    { label: 'Skaters', value: 'skater' },
    { label: 'Goalies', value: 'goalie' },
    { label: 'Rookies', value: 'rookie' },
  ];

  tableColumns: any[] = [];

  playerTableColumns = [
    { field: 'chaTeam', header: 'CHA Team' },
    { field: 'skaterFullName', header: 'Name' },
    { field: 'positionCode', header: 'Position' },
    { field: 'gamesPlayed', header: 'GP' },
    { field: 'goals', header: 'G' },
    { field: 'assists', header: 'A' },
    { field: 'points', header: 'Pts' },
    { field: 'pointsPerGame', header: 'PPG' },
    { field: 'plusMinus', header: '+/-' },
    { field: 'penaltyMinutes', header: 'PIM' },
    { field: 'ppPoints', header: 'PPP' },
    { field: 'shPoints', header: 'SHP' },
    { field: 'gameWinningGoals', header: 'GWG' },
    { field: 'shots', header: 'SOG' },
    { field: 'shootingPct', header: 'Sh%' },
    { field: 'faceoffWinPct', header: 'FO%' },
  ];

  goalieTableColumns = [
    { field: 'draft_year', header: 'CHA Team' },
    { field: 'draft_round', header: 'Name' },
    { field: 'player', header: 'GP' },
    { field: 'player', header: 'GAA' },
    { field: 'player', header: 'W' },
    { field: 'player', header: 'L' },
    { field: 'player', header: 'SO' },
    { field: 'player', header: 'GA' },
    { field: 'player', header: 'Sv' },
    { field: 'player', header: 'SF' },
    { field: 'player', header: 'Sv%' },
    { field: 'player', header: 'G' },
    { field: 'player', header: 'A' },
    { field: 'player', header: 'Pts' },
    { field: 'player', header: 'PIM' },
  ];

  filteringOptions = ['name', 'cha team', 'position'];

  constructor(
    private nhlStatsFacade: NhlStatsFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.isLoaded$ = this.nhlStatsFacade.isLoaded$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.stats$ = this.nhlStatsFacade.stats$;
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'skater':
        this.setSkaters(option);
        break;
      case 'goalie':
        this.setGoalies(option);
        break;
      case 'rookie':
        this.setRookies(option);
        break;
      default:
        return;
    }
  }

  setSkaters(option: string) {
    this.tableColumns = this.playerTableColumns;
    this.nhlStatsFacade.getStats(option, 'points', 'DESC', 0, 25);
  }

  setGoalies(option: string) {
    this.tableColumns = this.goalieTableColumns;
    this.nhlStatsFacade.getGoalieStats(option, 'wins', 'DESC', 0, 25);
  }

  setRookies(option: string) {
    this.tableColumns = this.playerTableColumns;
    this.nhlStatsFacade.getRookieStats('skater', 'points', 'DESC', 0, 25);
  }

  mapItems(stats: NhlPlayerStatDto[] | NhlGoalieStatDto[]) {
    return stats.map((stat: NhlPlayerStatDto | NhlGoalieStatDto) => ({
      ...stat,
      chaTeam: `${stat.chaTeam ? this.getString(stat.chaTeam) : ''}`,
      playerImg: this.getPlayerPicture(stat.playerId),
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
