import { createAction, props } from '@ngrx/store';

import { AwardDto } from '@cha/shared/api';

const NAMESPACE = '[Awards]';

const get = createAction(`${NAMESPACE} Get`);

const getSuccess = createAction(
  `${NAMESPACE} Get Success`,
  props<{ awards: AwardDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const AwardActions = {
  get,
  getSuccess,
  error,
};
