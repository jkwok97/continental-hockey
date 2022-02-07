import { createSelector } from '@ngrx/store';

import { AwardDto } from '@cha/shared/api';

import * as AwardReducer from './awards.reducer';
import { AppState, selectFeatureState } from '../index';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.awards
);

const selectAwards = createSelector(selectState, AwardReducer.getAwards);

const selectChampions = createSelector(selectState, AwardReducer.getChampions);

const selectDefenseman = createSelector(selectState, AwardReducer.getDefense);

const selectRookies = createSelector(selectState, AwardReducer.getRookies);

const selectGMs = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardTypeId === 2)
);

const selectSeason = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardTypeId === 4)
);

const selectScorers = createSelector(selectState, AwardReducer.getScorers);

const selectGoalies = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardTypeId === 7)
);

const selectLoading = createSelector(selectState, AwardReducer.getLoading);

const selectLoaded = createSelector(selectState, AwardReducer.getLoaded);

export const AwardsSelectors = {
  selectAwards,
  selectChampions,
  selectGMs,
  selectSeason,
  selectRookies,
  selectScorers,
  selectGoalies,
  selectDefenseman,
  selectLoaded,
  selectLoading,
};
