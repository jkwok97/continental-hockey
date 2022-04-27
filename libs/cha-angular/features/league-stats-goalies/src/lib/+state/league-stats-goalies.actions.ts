import { createAction, props } from '@ngrx/store';
import { StatGoalieLeadersDto } from '@cha/shared/api';

const NAMESPACE = '[LEAGUE STATS GOALIES]';

const getLeaders = createAction(`${NAMESPACE} Get League Leaders`);

const getLeadersSuccess = createAction(
  `${NAMESPACE} Get League Leaders Success`,
  props<{ leaders: StatGoalieLeadersDto }>()
);

const error = createAction(`${NAMESPACE} Error`);

export const LeagueStatsGoaliesActions = {
  getLeaders,
  getLeadersSuccess,
  error,
};
