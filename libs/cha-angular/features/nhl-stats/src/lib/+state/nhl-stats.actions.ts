import { createAction, props } from '@ngrx/store';
import { NhlGoalieStatDto, NhlPlayerStatDto } from '@cha/shared/api';

const NAMESPACE = '[NHL Stats]';

const getStats = createAction(
  `${NAMESPACE} Get Stats`,
  props<{
    statType: string;
    sortType: string;
    sortOrder: string;
    start: number;
    pageSize: number;
  }>()
);

const getStatsSuccess = createAction(
  `${NAMESPACE} Get Stats Success`,
  props<{ stats: NhlPlayerStatDto[] }>()
);

const getGoalieStats = createAction(
  `${NAMESPACE} Get Goalie Stats`,
  props<{
    statType: string;
    sortType: string;
    sortOrder: string;
    start: number;
    pageSize: number;
  }>()
);

const getGoalieStatsSuccess = createAction(
  `${NAMESPACE} Get Goalie Stats Success`,
  props<{ stats: NhlGoalieStatDto[] }>()
);

const getRookieStats = createAction(
  `${NAMESPACE} Get Rookie Stats`,
  props<{
    statType: string;
    sortType: string;
    sortOrder: string;
    start: number;
    pageSize: number;
  }>()
);

const getRookieStatsSuccess = createAction(
  `${NAMESPACE} Get Rookie Stats Success`,
  props<{ stats: NhlPlayerStatDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const NhlStatsActions = {
  getStats,
  getStatsSuccess,
  getGoalieStats,
  getGoalieStatsSuccess,
  getRookieStats,
  getRookieStatsSuccess,
  error,
};
