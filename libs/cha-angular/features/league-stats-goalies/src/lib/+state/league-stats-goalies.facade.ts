import { Injectable } from '@angular/core';
import { StatGoalieLeadersDto } from '@cha/shared/api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueStatsGoaliesActions } from './league-stats-goalies.actions';
import { State } from './league-stats-goalies.reducer';
import { LeagueStatsGoaliesSelectors } from './league-stats-goalies.selectors';

@Injectable()
export class LeagueStatsGoaliesFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsGoaliesSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsGoaliesSelectors.selectLoaded
  );

  allLeaders$: Observable<StatGoalieLeadersDto | null> = this.store.select(
    LeagueStatsGoaliesSelectors.selectAllLeaders
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats() {
    this.store.dispatch(LeagueStatsGoaliesActions.getLeaders());
  }
}
