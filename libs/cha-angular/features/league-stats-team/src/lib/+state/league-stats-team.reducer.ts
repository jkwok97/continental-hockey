import { Action, createReducer, on } from '@ngrx/store';
import { LeagueStatsTeamActions } from './league-stats-team.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  // on(DraftCurrentActions.getDraftTable, (state) => ({
  //   ...state,
  //   loading: true,
  //   loaded: false,
  // })),

  // on(DraftCurrentActions.getDraftTableSuccess, (state, action) => ({
  //   ...state,
  //   draftTable: action.draftTable,
  //   loading: false,
  //   loaded: true,
  // })),

  on(LeagueStatsTeamActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
