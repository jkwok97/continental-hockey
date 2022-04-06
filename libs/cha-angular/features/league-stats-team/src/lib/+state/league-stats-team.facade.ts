import { Injectable } from '@angular/core';
import { statTeamDto } from '@cha/shared/api';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeagueStatsTeamActions } from './league-stats-team.actions';
import { State } from './league-stats-team.reducer';
import { LeagueStatsTeamSelectors } from './league-stats-team.selectors';

@Injectable()
export class LeagueStatsTeamFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoaded
  );

  leagueTeamStats$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStats
  );

  leagueTeamStandings$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsStandings
  );

  leagueTeamWinningStreak$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsWinningStreak
  );

  leagueTeamPenalties$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPenalties
  );

  leagueTeamGoalDiff$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsGoalDiff
  );

  leagueTeamPp$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPp
  );

  leagueTeamPk$: Observable<statTeamDto[]> = this.store.select(
    LeagueStatsTeamSelectors.selectLeagueTeamStatsPk
  );

  constructor(private store: Store<State>) {}

  getLeagueTeamStats() {
    this.store.dispatch(LeagueStatsTeamActions.getLeagueTeamStats());
  }
}
