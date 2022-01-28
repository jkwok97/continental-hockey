import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { routerActions } from './router.actions';
import { Action } from '@ngrx/store';
import { RouterService } from '../services/router-service';

@Injectable()
export class RouterEffects implements OnInitEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private routerService: RouterService
  ) {}

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.init),
        tap(() => this.routerService.init())
      ),
    { dispatch: false }
  );

  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.go),
        tap(({ path, query: queryParams, extras }) => {
          if (path) {
            this.router.navigate(path, { queryParams, ...extras });
          }
        })
      ),
    { dispatch: false }
  );
  goByUrl$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.goByUrl),
        tap(({ url, extras }) => {
          if (url) {
            this.router.navigateByUrl(url, extras);
          }
        })
      ),
    { dispatch: false }
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  forward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  ngrxOnInitEffects(): Action {
    return routerActions.init();
  }
}
