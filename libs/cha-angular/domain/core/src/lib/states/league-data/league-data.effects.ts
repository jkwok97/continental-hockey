import { Injectable } from '@angular/core';
import { LeagueDataDto, LeagueDataService } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LeagueDataActions } from './league-data.actions';

@Injectable()
export class LeagueDataEffects {
  constructor(
    private actions$: Actions,
    private leagueDataService: LeagueDataService
  ) {}

  getLeagueData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDataActions.getLeagueData),
      exhaustMap((action) =>
        this.leagueDataService.getLeagueData().pipe(
          map((data: LeagueDataDto) =>
            LeagueDataActions.getLeagueDataSuccess({ data })
          ),
          catchError(() => of(LeagueDataActions.error()))
        )
      )
    )
  );
}
