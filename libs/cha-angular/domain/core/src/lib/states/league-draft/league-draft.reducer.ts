import { DraftPickDto, DraftTableDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { LeagueDraftActions } from './league-draft.actions';

export interface State {
  draftTable: DraftTableDto[];
  draftPicks: DraftPickDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  draftTable: [],
  draftPicks: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    LeagueDraftActions.getDraftTable,
    LeagueDraftActions.getDraftPicks,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(LeagueDraftActions.getDraftTableSuccess, (state, action) => ({
    ...state,
    draftTable: action.draftTable,
    loading: false,
    loaded: true,
  })),

  on(LeagueDraftActions.getDraftPicksSuccess, (state, action) => ({
    ...state,
    draftPicks: action.draftPicks,
    loading: false,
    loaded: true,
  })),

  on(LeagueDraftActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getDraftTable = (state: State) => state.draftTable;

export const getDraftPicks = (state: State) => state.draftPicks;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
