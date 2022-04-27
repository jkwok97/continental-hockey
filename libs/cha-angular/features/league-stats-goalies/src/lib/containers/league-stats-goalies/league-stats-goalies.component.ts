import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueStatsGoaliesFacade } from '../../+state/league-stats-goalies.facade';

@Component({
  selector: 'cha-ang-league-stats-goalies',
  templateUrl: './league-stats-goalies.component.html',
  styleUrls: ['./league-stats-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsGoaliesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueStatsGoalieFacade: LeagueStatsGoaliesFacade) {
    this.isLoaded$ = this.leagueStatsGoalieFacade.isLoaded$;
    this.isLoading$ = this.leagueStatsGoalieFacade.isLoading$;
  }

  ngOnInit(): void {
    this.leagueStatsGoalieFacade.getLeagueTeamStats();
  }
}
