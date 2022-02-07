import { AwardDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { AwardActions } from './awards.action';

export interface State {
  awards: AwardDto[];
  champions: AwardDto[];
  scorers: AwardDto[];
  defense: AwardDto[];
  rookies: AwardDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  awards: [],
  champions: [],
  scorers: [],
  defense: [],
  rookies: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    AwardActions.getChampions,
    AwardActions.getScorers,
    AwardActions.getDefense,
    AwardActions.getRookies,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

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

  on(AwardActions.getDefenseSuccess, (state, action) => ({
    ...state,
    defense: action.awards,
    loading: false,
    loaded: true,
  })),

  on(AwardActions.getRookiesSuccess, (state, action) => ({
    ...state,
    rookies: action.awards,
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

export const getDefense = (state: State) => state.defense;

export const getRookies = (state: State) => state.rookies;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
