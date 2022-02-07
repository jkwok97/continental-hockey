import { Injectable } from '@angular/core';
import { DraftPickDto, DraftService, DraftTableDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LeagueDraftActions } from './league-draft.actions';

@Injectable()
export class LeagueDraftEffects {
  constructor(private actions$: Actions, private draftService: DraftService) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDraftActions.getDraftTable),
      exhaustMap((action) =>
        this.draftService.getDraftTable(action.draftYear).pipe(
          map((draftTable: DraftTableDto[]) =>
            LeagueDraftActions.getDraftTableSuccess({ draftTable })
          ),
          catchError(() => of(LeagueDraftActions.error()))
        )
      )
    )
  );

  getDraftPicks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDraftActions.getDraftPicks),
      exhaustMap((action) =>
        this.draftService.getDraftPicks().pipe(
          map((draftPicks: DraftPickDto[]) =>
            LeagueDraftActions.getDraftPicksSuccess({ draftPicks })
          ),
          catchError(() => of(LeagueDraftActions.error()))
        )
      )
    )
  );
}
