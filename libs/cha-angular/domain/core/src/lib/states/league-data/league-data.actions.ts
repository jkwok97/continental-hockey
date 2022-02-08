import { createAction, props } from '@ngrx/store';

import { LeagueDataDto } from '@cha/shared/api';

const NAMESPACE = '[League Data]';

const getLeagueData = createAction(`${NAMESPACE} Get`);

const getLeagueDataSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ data: LeagueDataDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueDataActions = {
  getLeagueData,
  getLeagueDataSuccess,
  error,
};
