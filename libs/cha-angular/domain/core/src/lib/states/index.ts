import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as userTeamReducer from './user-team/user-team.reducer';
import * as displayReducer from './display/display.reducer';
import * as awardsReducer from './awards/awards.reducer';
import * as draftReducer from './league-draft/league-draft.reducer';
import * as currentDataReducer from './league-data/league-data.reducer';

export const selectFeatureState = createFeatureSelector<AppState>('core');

export const coreReducer: ActionReducerMap<AppState> = {
  userTeam: userTeamReducer.reducer,
  display: displayReducer.reducer,
  awards: awardsReducer.reducer,
  draft: draftReducer.reducer,
  currentData: currentDataReducer.reducer,
};

export interface AppState {
  userTeam: userTeamReducer.State;
  display: displayReducer.State;
  awards: awardsReducer.State;
  draft: draftReducer.State;
  currentData: currentDataReducer.State;
}
