import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as userTeamReducer from './user-team/user-team.reducer';

export const selectFeatureState = createFeatureSelector<AppState>('core');

export const coreReducer: ActionReducerMap<AppState> = {
  userTeam: userTeamReducer.reducer,
};

export interface AppState {
  userTeam: userTeamReducer.State;
}
