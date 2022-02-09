import { createAction, props } from '@ngrx/store';

import { DraftTableDto } from '@cha/shared/api';

const NAMESPACE = '[NHL Leaders]';

const getLeaders = createAction(`${NAMESPACE} Get Leaders`);

const getLeadersSuccess = createAction(
  `${NAMESPACE} Get Leaders Success`,
  props<{ leaders: any }>()
);

const getPointsLeaders = createAction(`${NAMESPACE} Get Points Leaders`);

const getPointsLeadersSuccess = createAction(
  `${NAMESPACE} Get Points Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getGoalsLeaders = createAction(`${NAMESPACE} Get Goals Leaders`);

const getGoalsLeadersSuccess = createAction(
  `${NAMESPACE} Get Goals Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getAssistsLeaders = createAction(`${NAMESPACE} Get Assists Leaders`);

const getAssistsLeadersSuccess = createAction(
  `${NAMESPACE} Get Assists Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getGAALeaders = createAction(`${NAMESPACE} Get GAA Leaders`);

const getGAALeadersSuccess = createAction(
  `${NAMESPACE} Get GAA Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getSavePctLeaders = createAction(`${NAMESPACE} Get Save Pct Leaders`);

const getSavePctLeadersSuccess = createAction(
  `${NAMESPACE} Get Save Pct Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getShutoutLeaders = createAction(`${NAMESPACE} Get Shutout Leaders`);

const getShutoutLeadersSuccess = createAction(
  `${NAMESPACE} Get Points Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getRookiePointsLeaders = createAction(
  `${NAMESPACE} Get Rookie Points Leaders`
);

const getRookiePointsLeadersSuccess = createAction(
  `${NAMESPACE} Get Rookie Points Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getRookieGoalsLeaders = createAction(
  `${NAMESPACE} Get Rookie Goals Leaders`
);

const getRookieGoalsLeadersSuccess = createAction(
  `${NAMESPACE} Get Rookie Goals Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getRookieAssistsLeaders = createAction(
  `${NAMESPACE} Get Rookie Assists Leaders`
);

const getRookieAssistsLeadersSuccess = createAction(
  `${NAMESPACE} Get Rookie Assists Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getDefensePointsLeaders = createAction(
  `${NAMESPACE} Get Defense Points Leaders`
);

const getDefensePointsLeadersSuccess = createAction(
  `${NAMESPACE} Get Defense Points Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getDefenseGoalsLeaders = createAction(
  `${NAMESPACE} Get Defense Goals Leaders`
);

const getDefenseGoalsLeadersSuccess = createAction(
  `${NAMESPACE} Get Defense Goals Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const getDefenseAssistsLeaders = createAction(
  `${NAMESPACE} Get Defense Assists Leaders`
);

const getDefenseAssistsLeadersSuccess = createAction(
  `${NAMESPACE} Get Defense Assists Leaders Success`,
  props<{ draftTable: DraftTableDto[] }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const NhlLeadersActions = {
  getLeaders,
  getLeadersSuccess,
  error,
};
