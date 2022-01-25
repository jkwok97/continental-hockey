import { Injectable } from '@angular/core';
import { TeamInfoService, UserDto, UserTeamDto } from '@cha/shared/api';
import { AuthFacade, authActions } from '@cha/shared/auth/angular/auth-angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserTeamActions } from './user-team.actions';

@Injectable()
export class UserTeamEffects {
  constructor(
    private actions$: Actions,
    private authFacade: AuthFacade,
    private teamInfoService: TeamInfoService
  ) {}

//   loginSuccess$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(authActions.loginSuccess),
//       map((action) => UserTeamActions.get({ userId: action.user.id }))
//     )
//   );

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserTeamActions.get),
      exhaustMap((action) =>
        this.teamInfoService.getUserTeams(action.userId).pipe(
          map((userTeams: UserTeamDto[]) =>
            UserTeamActions.getSuccess({ userTeams })
          ),
          catchError(() => of(UserTeamActions.error()))
        )
      )
    )
  );
}
