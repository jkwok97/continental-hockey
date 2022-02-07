import { createSelector } from '@ngrx/store';

import * as LeagueDraftReducer from './league-draft.reducer';
import { AppState, selectFeatureState } from '../index';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.draft
);

const selectDraftTable = createSelector(
  selectState,
  LeagueDraftReducer.getDraftTable
);

const selectDraftPicks = createSelector(
  selectState,
  LeagueDraftReducer.getDraftPicks
);

const selectLoading = createSelector(
  selectState,
  LeagueDraftReducer.getLoading
);

const selectLoaded = createSelector(selectState, LeagueDraftReducer.getLoaded);

export const LeagueDraftSelectors = {
  selectDraftTable,
  selectDraftPicks,
  selectLoaded,
  selectLoading,
};
