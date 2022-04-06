import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team-pp',
  templateUrl: './league-stats-team-pp.component.html',
  styleUrls: ['./league-stats-team-pp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsTeamPpComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'pp_attempts', header: 'PPA' },
    { field: 'pp_goals', header: 'PPG' },
    { field: 'pp_pct', header: 'PP%' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamPp$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
