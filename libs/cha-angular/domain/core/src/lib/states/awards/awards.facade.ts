import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AwardActions } from './awards.action';
import { AwardsSelectors } from './awards.selectors';
import { State } from './awards.reducer';
import { AwardDto } from '@cha/shared/api';

@Injectable()
export class AwardsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    AwardsSelectors.selectLoaded
  );

  awards$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectAwards
  );

  champions$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectChampions
  );

  defenseman$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectDefenseman
  );

  gms$: Observable<AwardDto[]> = this.store.select(AwardsSelectors.selectGMs);

  goalies$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectGoalies
  );

  rookies$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectRookies
  );

  scorers$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectScorers
  );

  season$: Observable<AwardDto[]> = this.store.select(
    AwardsSelectors.selectSeason
  );

  constructor(private store: Store<State>) {}

  getChampions() {
    this.store.dispatch(AwardActions.getChampions());
  }

  getScorers() {
    this.store.dispatch(AwardActions.getScorers());
  }
}
