import { AwardDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { AwardActions } from './awards.action';

export interface State {
  awards: AwardDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  awards: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(AwardActions.get, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(AwardActions.getSuccess, (state, action) => ({
    ...state,
    awards: action.awards,
    loading: false,
    loaded: true,
  })),

  on(AwardActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAwards = (state: State) => state.awards;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
