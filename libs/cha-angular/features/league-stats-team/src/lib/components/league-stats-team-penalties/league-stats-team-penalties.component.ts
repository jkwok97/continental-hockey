import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { first } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team-penalties',
  templateUrl: './league-stats-team-penalties.component.html',
  styleUrls: ['./league-stats-team-penalties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsTeamPenaltiesComponent {
  stats!: statTeamDto[];

  tableColumns = [
    { field: 'team', header: 'Team' },
    { field: 'penalty_minutes', header: 'PIM' },
    { field: 'pim_game', header: 'PIM/G' },
  ];

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.leagueStatsTeamFacade.leagueTeamPenalties$
      .pipe(first())
      .subscribe((teamStats: statTeamDto[]) => {
        this.stats = teamStats;
      });
  }
}
