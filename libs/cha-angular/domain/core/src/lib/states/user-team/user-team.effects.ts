import { Injectable } from '@angular/core';
import { TeamDto, TeamInfoService } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserTeamActions } from './user-team.actions';

@Injectable()
export class UserTeamEffects {
  constructor(
    private actions$: Actions,
    private teamInfoService: TeamInfoService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserTeamActions.get),
      exhaustMap((action) =>
        this.teamInfoService.getUserTeams(action.userId).pipe(
          map((userTeams: TeamDto[]) =>
            UserTeamActions.getSuccess({ userTeams })
          ),
          catchError(() => of(UserTeamActions.error()))
        )
      )
    )
  );
}
