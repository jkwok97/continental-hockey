import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team-streak',
  templateUrl: './league-stats-team-streak.component.html',
  styleUrls: ['./league-stats-team-streak.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsTeamStreakComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'long_win_streak', header: 'Games' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamWinningStreak$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
