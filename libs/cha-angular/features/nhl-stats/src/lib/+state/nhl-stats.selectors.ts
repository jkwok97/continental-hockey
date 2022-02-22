import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as NhlLeadersReducer from './nhl-stats.reducer';

export const selectState =
  createFeatureSelector<NhlLeadersReducer.State>('nhl-leaders');

const selectLoading = createSelector(selectState, NhlLeadersReducer.getLoading);

const selectLoaded = createSelector(selectState, NhlLeadersReducer.getLoaded);

export const NhlStatsSelectors = {
  selectLoaded,
  selectLoading,
};
