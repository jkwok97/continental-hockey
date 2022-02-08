import { Injectable } from '@angular/core';
import { DraftPickDto, DraftService, DraftTableDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { LeagueDataFacade } from '../league-data/league-data.facade';
import { LeagueDraftActions } from './league-draft.actions';

@Injectable()
export class LeagueDraftEffects {
  constructor(
    private actions$: Actions,
    private draftService: DraftService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getDraftTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueDraftActions.getDraftTable),
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
