import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as NhlStatsReducer from './nhl-stats.reducer';

export const selectState =
  createFeatureSelector<NhlStatsReducer.State>('nhl-stats');

const selectStats = createSelector(selectState, NhlStatsReducer.getStats);

const selectTotal = createSelector(selectState, NhlStatsReducer.getTotal);

const selectLoading = createSelector(selectState, NhlStatsReducer.getLoading);

const selectLoaded = createSelector(selectState, NhlStatsReducer.getLoaded);

export const NhlStatsSelectors = {
  selectStats,
  selectTotal,
  selectLoaded,
  selectLoading,
};
