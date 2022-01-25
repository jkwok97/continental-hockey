import { createAction, props } from '@ngrx/store';

import { UserTeamDto } from '@cha/shared/api';

const NAMESPACE = '[User Team]';

const get = createAction(`${NAMESPACE} Get`, props<{ userId: number }>());

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ userTeams: UserTeamDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const UserTeamActions = {
  get,
  getSuccess,
  error,
};
