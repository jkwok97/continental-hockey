import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { LeagueStatsService, statTeamDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { LeagueStatsTeamActions } from './league-stats-team.actions';

@Injectable()
export class LeagueStatsTeamEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private leagueStatsService: LeagueStatsService
  ) {}

  getLeagueTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsTeamActions.getLeagueTeamStats),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.leagueStatsService
          .getTeamStatsBySeasonByType(
            data.current_year,
            data.current_season_type
          )
          .pipe(
            map((leagueTeamStats: statTeamDto[]) =>
              LeagueStatsTeamActions.getLeagueTeamStatsSuccess({
                leagueTeamStats,
              })
            ),
            catchError(() => of(LeagueStatsTeamActions.error()))
          )
      )
    )
  );
}
