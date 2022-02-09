import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { DraftPickDto, DraftService, DraftTableDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { DraftSummaryActions } from './draft-summary.actions';

@Injectable()
export class DraftSummaryEffects {
  constructor(private actions$: Actions, private draftService: DraftService) {}

  getDraftSummary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DraftSummaryActions.getDraftPicks),
      exhaustMap((action) =>
        this.draftService.getDraftPicks().pipe(
          map((draftPicks: DraftPickDto[]) =>
            DraftSummaryActions.getDraftPicksSuccess({ draftPicks })
          ),
          catchError(() => of(DraftSummaryActions.error()))
        )
      )
    )
  );
}
