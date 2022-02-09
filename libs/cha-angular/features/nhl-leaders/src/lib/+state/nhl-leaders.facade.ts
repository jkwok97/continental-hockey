import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NhlLeadersActions } from './nhl-leaders.actions';
import { State } from './nhl-leaders.reducer';
import { NhlLeadersSelectors } from './nhl-leaders.selectors';


@Injectable()
export class NhlLeadersFacade {
  isLoading$: Observable<boolean> = this.store.select(
    NhlLeadersSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    NhlLeadersSelectors.selectLoaded
  );

  leaders$: Observable<any> = this.store.select(
    NhlLeadersSelectors.selectLeaders
  );

  constructor(private store: Store<State>) {}

  getLeaders() {
    this.store.dispatch(NhlLeadersActions.getLeaders());
  }
}
