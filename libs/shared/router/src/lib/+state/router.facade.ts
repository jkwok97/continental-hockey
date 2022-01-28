import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRoute, RouterState } from './router.interfaces';
import { routerActions } from './router.actions';

@Injectable()
export class RouterFacade {
  constructor(private store: Store<RouterState>) {}

  go(to: AppRoute) {
    this.store.dispatch(routerActions.go(to));
  }

  goByUrl(to: AppRoute) {
    this.store.dispatch(routerActions.go(to));
  }
}
