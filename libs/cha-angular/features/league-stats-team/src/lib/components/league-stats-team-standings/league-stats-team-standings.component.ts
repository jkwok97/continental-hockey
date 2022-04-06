import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { filter, first, Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team-standings',
  templateUrl: './league-stats-team-standings.component.html',
  styleUrls: ['./league-stats-team-standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsTeamStandingsComponent {
  teamStandings$: Observable<statTeamDto[]>;

  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'games_played', header: 'GP' },
    { field: 'wins', header: 'W' },
    { field: 'loss', header: 'L' },
    { field: 'ties', header: 'T' },
    { field: 'points', header: 'Pts' },
    { field: 'win_pct', header: 'Win%' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.teamStandings$ = this.leagueStatsTeamFacade.leagueTeamStandings$;

    this.teamStandings$
      .pipe(
        filter((stats: statTeamDto[]) => stats.length > 0),
        first()
      )
      .subscribe((stats: statTeamDto[]) => {
        this.stats = stats;
      });
  }
}
