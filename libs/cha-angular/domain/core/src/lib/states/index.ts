import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as userTeamReducer from './user-team/user-team.reducer';
import * as displayReducer from './display/display.reducer';

export const selectFeatureState = createFeatureSelector<AppState>('core');

export const coreReducer: ActionReducerMap<AppState> = {
  userTeam: userTeamReducer.reducer,
  display: displayReducer.reducer,
};

export interface AppState {
  userTeam: userTeamReducer.State;
  display: displayReducer.State;
}
