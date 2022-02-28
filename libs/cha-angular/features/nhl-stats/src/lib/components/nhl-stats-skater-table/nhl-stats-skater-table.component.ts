import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { NhlGoalieStatDto, NhlPlayerStatDto, TeamDto } from '@cha/shared/api';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { combineLatest, delay, Observable, first, filter } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-ang-nhl-stats-skater-table',
  templateUrl: './nhl-stats-skater-table.component.html',
  styleUrls: ['./nhl-stats-skater-table.component.scss'],
})
export class NhlStatsSkaterTableComponent {
  teams$: Observable<TeamDto[]>;
  total$: Observable<number>;
  stats$: Observable<NhlPlayerStatDto[] | NhlGoalieStatDto[]>;
  isLoading$: Observable<boolean>;

  @ViewChild('dt') dt: Table | undefined;

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

  first = 0;
  rows = 25;
  totalRecords = 0;
  sortField = 'points';
  stats!: NhlPlayerStatDto[] | NhlGoalieStatDto[];

  loading = false;

  constructor(
    private leagueDataFacade: LeagueDataFacade,
    private nhlStatsFacade: NhlStatsFacade
  ) {
    this.teams$ = this.leagueDataFacade.leagueTeams$;
    this.total$ = this.nhlStatsFacade.total$;
    this.stats$ = this.nhlStatsFacade.stats$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
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

  loadSkaterStats(event: LazyLoadEvent) {
    this.loading = true;

    const sortOrder = event.sortOrder === 1 ? 'ASC' : 'DESC';
    const sortField = event.sortField ? event.sortField : 'points';
    const firstNum = event.first ? event.first : 0;
    const rows = event.rows ? event.rows : 25;

    this.nhlStatsFacade.getStats(
      'skater',
      sortField,
      sortOrder,
      firstNum,
      rows
    );

    setTimeout(() => {
      combineLatest([this.total$, this.stats$])
        .pipe(
          filter(([total, stats]) => total !== 0 && stats.length > 0),
          first()
        )
        .subscribe(
          ([total, stats]: [
            number,
            NhlPlayerStatDto[] | NhlGoalieStatDto[]
          ]) => {
            this.totalRecords = total;
            this.stats = this.mapItems(stats);
            this.loading = false;
            if (this.dt) {
              this.dt.value = this.stats;
              this.dt.totalRecords = this.totalRecords;
              this.dt.loading = this.loading;
            }

            console.log(this.stats);
            console.log(this.dt?.value);
            console.log(this.dt);
          }
        );
    }, 1000);
  }
}
