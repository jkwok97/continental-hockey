import { createAction, props } from '@ngrx/store';

import { DraftPickDto, DraftTableDto } from '@cha/shared/api';

const NAMESPACE = '[Draft]';

const getDraftTable = createAction(
  `${NAMESPACE} Get Draft Lottery`
);

const getDraftTableSuccess = createAction(
  `${NAMESPACE} Get Draft Lottery Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getDraftPicks = createAction(`${NAMESPACE} Get Draft Picks`);

const getDraftPicksSuccess = createAction(
  `${NAMESPACE} Get Draft Picks Success`,
  props<{ draftPicks: DraftPickDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueDraftActions = {
  getDraftTable,
  getDraftTableSuccess,
  getDraftPicks,
  getDraftPicksSuccess,
  error,
};
