import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[LEAGUE STATS TEAM]';

const error = createAction(`${NAMESPACE} Error`);

export const LeagueStatsTeamActions = {
  error,
};
