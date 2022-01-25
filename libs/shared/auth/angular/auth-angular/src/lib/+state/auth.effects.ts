import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { authActions } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { UserDto } from '@cha/shared/api';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap((action) =>
        this.authService.login(action.email).pipe(
          map((user: UserDto) => authActions.loginSuccess({ user })),
          catchError(() => of(authActions.loginFailed()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.loginSuccess),
        tap((action) => {
          localStorage.setItem('currentUser', JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logout),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );
}
