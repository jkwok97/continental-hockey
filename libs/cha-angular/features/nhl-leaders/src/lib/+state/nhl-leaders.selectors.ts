import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as NhlLeadersReducer from './nhl-leaders.reducer';

export const selectState =
  createFeatureSelector<NhlLeadersReducer.State>('nhl-leaders');

const selectLeaders = createSelector(
  selectState,
  NhlLeadersReducer.getLeaders
);

const selectLoading = createSelector(
  selectState,
  NhlLeadersReducer.getLoading
);

const selectLoaded = createSelector(selectState, NhlLeadersReducer.getLoaded);

export const NhlLeadersSelectors = {
  selectLeaders,
  selectLoaded,
  selectLoading,
};
