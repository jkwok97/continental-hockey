import { createAction, props } from '@ngrx/store';

import { AwardDto } from '@cha/shared/api';

const NAMESPACE = '[Awards]';

const getChampions = createAction(`${NAMESPACE} Get Champions`);

const getChampionsSuccess = createAction(
  `${NAMESPACE} Get Champions Success`,
  props<{ awards: AwardDto[] }>()
);

const getScorers = createAction(`${NAMESPACE} Get Scorers`);

const getScorersSuccess = createAction(
  `${NAMESPACE} Get Scorers Success`,
  props<{ awards: AwardDto[] }>()
);

const getDefense = createAction(`${NAMESPACE} Get Defense`);

const getDefenseSuccess = createAction(
  `${NAMESPACE} Get Defense Success`,
  props<{ awards: AwardDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const AwardActions = {
  getChampions,
  getChampionsSuccess,
  getScorers,
  getScorersSuccess,
  getDefense,
  getDefenseSuccess,
  error,
};
