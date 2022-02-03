import { createSelector } from '@ngrx/store';

import { AwardDto } from '@cha/shared/api';

import * as AwardReducer from './awards.reducer';
import { AppState, selectFeatureState } from '../index';

const selectState = createSelector(
  selectFeatureState,
  (state: AppState) => state.awards
);

const selectAwards = createSelector(selectState, AwardReducer.getAwards);

const selectChampions = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 3)
);

const selectGMs = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 2)
);

const selectSeason = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 4)
);

const selectRookies = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 5)
);

const selectScorers = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 6)
);

const selectGoalies = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 7)
);

const selectDefenseman = createSelector(selectAwards, (awards: AwardDto[]) =>
  awards.filter((award: AwardDto) => award.awardtypeid === 8)
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
