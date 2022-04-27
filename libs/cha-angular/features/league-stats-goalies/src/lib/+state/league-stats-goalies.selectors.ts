import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueStatsGoalieReducer from './league-stats-goalies.reducer';

export const selectState =
  createFeatureSelector<LeagueStatsGoalieReducer.State>('league-stats-goalie');

const selectLoading = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLoaded
);

const selectAllLeaders = createSelector(
  selectState,
  LeagueStatsGoalieReducer.getLeaders
);

export const LeagueStatsGoaliesSelectors = {
  selectLoaded,
  selectLoading,
  selectAllLeaders,
};
