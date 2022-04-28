import { Injectable } from '@angular/core';
import { StatGoalieLeaderDto, StatGoalieLeadersDto } from '@cha/shared/api';
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

  winsLeaders$: Observable<StatGoalieLeaderDto[]> = this.store.select(
    LeagueStatsGoaliesSelectors.selectWinsLeaders
  );

  gaaLeaders$: Observable<StatGoalieLeaderDto[]> = this.store.select(
    LeagueStatsGoaliesSelectors.selectGaaLeaders
  );

  savePctLeaders$: Observable<StatGoalieLeaderDto[]> = this.store.select(
    LeagueStatsGoaliesSelectors.selectSavePctLeaders
  );

  shotsFacedLeaders$: Observable<StatGoalieLeaderDto[]> = this.store.select(
    LeagueStatsGoaliesSelectors.selectShotsFacedLeaders
  );

  shutoutsLeaders$: Observable<StatGoalieLeaderDto[]> = this.store.select(
    LeagueStatsGoaliesSelectors.selectShutoutsLeaders
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats() {
    this.store.dispatch(LeagueStatsGoaliesActions.getLeaders());
  }
}
