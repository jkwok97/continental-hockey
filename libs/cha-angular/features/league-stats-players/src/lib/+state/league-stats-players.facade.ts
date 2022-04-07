import { Injectable } from '@angular/core';
import { StatPlayerLeaderDto, StatPlayerLeadersDto } from '@cha/shared/api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueStatsPlayersActions } from './league-stats-players.actions';
import { State } from './league-stats-players.reducer';
import { LeagueStatsPlayersSelectors } from './league-stats-players.selectors';

@Injectable()
export class LeagueStatsPlayersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsPlayersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsPlayersSelectors.selectLoaded
  );

  allLeaders$: Observable<StatPlayerLeadersDto | null> = this.store.select(
    LeagueStatsPlayersSelectors.selectAllLeaders
  );

  hitsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectHitsLeaders
  );

  currStreakLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectCurrentStreakLeaders
  );

  longStreakLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectLongStreakLeaders
  );

  worstPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectWorstPlusMinusLeaders
  );

  bestPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectBestPlusMinusLeaders
  );

  minutesLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectMinutesLeaders
  );

  penaltiesLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPenaltiesLeaders
  );

  shotsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectShotsLeaders
  );

  blockedShotsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectBlockedShotsLeaders
  );

  shGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectShGoalsLeaders
  );

  ppGoalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPpGoalsLeaders
  );

  goalsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectGoalsLeaders
  );

  assistsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectAssistsLeaders
  );

  rookieLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectRookiesLeaders
  );

  defenseLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectDefenseLeaders
  );

  pointsLeaders$: Observable<StatPlayerLeaderDto[]> = this.store.select(
    LeagueStatsPlayersSelectors.selectPointsLeaders
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats() {
    this.store.dispatch(LeagueStatsPlayersActions.getLeaders());
  }
}
