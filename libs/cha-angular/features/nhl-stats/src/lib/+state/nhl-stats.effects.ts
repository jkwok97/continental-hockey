import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { NhlService } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { NhlStatsActions } from './nhl-stats.actions';

@Injectable()
export class NhlStatsEffects {
  constructor(
    private actions$: Actions,
    private nhlService: NhlService,
    private leagueDataFacade: LeagueDataFacade
  ) {}

  getSkaters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlStatsActions.getStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.nhlService
          .getNHLsummary(
            data.nhl_year,
            action.statType,
            action.sortType,
            action.sortOrder,
            action.start,
            action.pageSize
          )
          .pipe(
            map((stats) => NhlStatsActions.getStatsSuccess({ stats })),
            catchError(() => of(NhlStatsActions.error()))
          )
      )
    )
  );
}
