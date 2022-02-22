import { createAction, props } from '@ngrx/store';

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
  props<{ stats: any }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const NhlStatsActions = {
  getStats,
  getStatsSuccess,
  error,
};
