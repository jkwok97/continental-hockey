import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { DraftService, DraftTableDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { DraftCurrentActions } from './draft-current.actions';

@Injectable()
export class DraftCurrentEffects {
  constructor(
    private actions$: Actions,
    private draftService: DraftService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftCurrentActions.getDraftTable),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.draftService
          .getDraftTable(
            data.current_draft_year,
            data.current_year,
            data.current_season_type
          )
          .pipe(
            map((draftTable: DraftTableDto[]) =>
              DraftCurrentActions.getDraftTableSuccess({ draftTable })
            ),
            catchError(() => of(DraftCurrentActions.error()))
          )
      )
    )
  );
}
