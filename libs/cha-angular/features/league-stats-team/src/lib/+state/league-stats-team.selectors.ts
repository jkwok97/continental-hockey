import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as LeagueStatsTeamReducer from './league-stats-team.reducer';

export const selectState =
  createFeatureSelector<LeagueStatsTeamReducer.State>('league-stats-team');

const selectLoading = createSelector(
  selectState,
  LeagueStatsTeamReducer.getLoading
);

const selectLoaded = createSelector(
  selectState,
  LeagueStatsTeamReducer.getLoaded
);

export const LeagueStatsTeamSelectors = {
  selectLoaded,
  selectLoading,
};
