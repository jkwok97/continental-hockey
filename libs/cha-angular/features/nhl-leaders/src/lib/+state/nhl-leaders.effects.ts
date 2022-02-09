import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { DraftTableDto, NhlService } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { NhlLeadersActions } from './nhl-leaders.actions';

@Injectable()
export class NhlLeadersEffects {
  constructor(
    private actions$: Actions,
    private nhlService: NhlService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlLeadersActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.nhlService.getAllLeaders(data.nhl_year, 'no', 'trim').pipe(
          map((leaders) => NhlLeadersActions.getLeadersSuccess({ leaders })),
          catchError(() => of(NhlLeadersActions.error()))
        )
      )
    )
  );
}
