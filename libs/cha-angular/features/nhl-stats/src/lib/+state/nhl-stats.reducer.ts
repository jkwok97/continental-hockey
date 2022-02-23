import { NhlGoalieStatDto, NhlPlayerStatDto } from '@cha/shared/api';
import { Action, createReducer, on } from '@ngrx/store';
import { NhlStatsActions } from './nhl-stats.actions';

export interface State {
  stats: NhlPlayerStatDto[] | NhlGoalieStatDto[];
  loading: boolean;
  loaded: boolean;
}

const initialState: State = {
  stats: [],
  loading: false,
  loaded: false,
};

const r = createReducer(
  initialState,

  on(
    NhlStatsActions.getStats,
    NhlStatsActions.getRookieStats,
    NhlStatsActions.getGoalieStats,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),

  on(
    NhlStatsActions.getStatsSuccess,
    NhlStatsActions.getRookieStatsSuccess,
    NhlStatsActions.getGoalieStatsSuccess,
    (state, action) => ({
      ...state,
      stats: action.stats,
      loading: false,
      loaded: true,
    })
  ),

  on(NhlStatsActions.error, (state) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return r(state, action);
}

export const getStats = (state: State) => state.stats;

export const getLoading = (state: State) => state.loading;

export const getLoaded = (state: State) => state.loaded;
