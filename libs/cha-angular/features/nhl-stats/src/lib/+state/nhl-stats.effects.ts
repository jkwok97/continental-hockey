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

  getSportnetStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlStatsActions.getSportsnetStats),
      exhaustMap((action) =>
        this.nhlService
          .getNHLSummarySportsnet(action.season, action.season_type)
          .pipe(
            map(({ skaters, goalies }) =>
              NhlStatsActions.getSportsnetStatsSuccess({ skaters, goalies })
            ),
            catchError(() => of(NhlStatsActions.error()))
          )
      )
    )
  );

  getRookieStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NhlStatsActions.getRookieStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.nhlService
          .getNHLRookiesummary(
            data.nhl_year,
            action.statType,
            action.sortType,
            action.sortOrder,
            action.start,
            action.pageSize
          )
          .pipe(
            map(({ stats, total }) =>
              NhlStatsActions.getRookieStatsSuccess({ stats, total })
            ),
            catchError(() => of(NhlStatsActions.error()))
          )
      )
    )
  );
}
