import { AwardDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { AwardActions } from './awards.action';

export interface State {
  awards: AwardDto[];
  champions: AwardDto[];
  scorers: AwardDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  awards: [],
  champions: [],
  scorers: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(AwardActions.getChampions, AwardActions.getScorers, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(AwardActions.getChampionsSuccess, (state, action) => ({
    ...state,
    champions: action.awards,
    loading: false,
    loaded: true,
  })),

  on(AwardActions.getScorersSuccess, (state, action) => ({
    ...state,
    scorers: action.awards,
    loading: false,
    loaded: true,
  })),

  on(AwardActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getAwards = (state: State) => state.awards;

export const getChampions = (state: State) => state.champions;

export const getScorers = (state: State) => state.scorers;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
