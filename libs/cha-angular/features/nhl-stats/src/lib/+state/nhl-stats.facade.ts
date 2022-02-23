import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NhlStatsActions } from './nhl-stats.actions';
import { State } from './nhl-stats.reducer';
import { NhlStatsSelectors } from './nhl-stats.selectors';

@Injectable()
export class NhlStatsFacade {
  isLoading$: Observable<boolean> = this.store.select(
    NhlStatsSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    NhlStatsSelectors.selectLoaded
  );

  constructor(private store: Store<State>) {}

  getStats(
    statType: string,
    sortType: string,
    sortOrder: string,
    start: number,
    pageSize: number
  ) {
    this.store.dispatch(
      NhlStatsActions.getStats({
        statType,
        sortType,
        sortOrder,
        start,
        pageSize,
      })
    );
  }

  getRookieStats(
    statType: string,
    sortType: string,
    sortOrder: string,
    start: number,
    pageSize: number
  ) {
    this.store.dispatch(
      NhlStatsActions.getRookieStats({
        statType,
        sortType,
        sortOrder,
        start,
        pageSize,
      })
    );
  }
}
