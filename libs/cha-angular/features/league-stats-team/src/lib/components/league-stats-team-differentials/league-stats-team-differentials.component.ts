import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team-differentials',
  templateUrl: './league-stats-team-differentials.component.html',
  styleUrls: ['./league-stats-team-differentials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsTeamDifferentialsComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'goals_for', header: 'GF' },
    { field: 'goals_against', header: 'GA' },
    { field: 'goals_diff', header: 'Goal Diff' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamGoalDiff$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
