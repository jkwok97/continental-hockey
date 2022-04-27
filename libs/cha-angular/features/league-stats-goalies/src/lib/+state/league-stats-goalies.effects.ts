import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { GoalieStatsService, StatGoalieLeadersDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { LeagueStatsGoaliesActions } from './league-stats-goalies.actions';

@Injectable()
export class LeagueStatsGoaliesEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private goaliesStatsService: GoalieStatsService
  ) {}

  getLeagueTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsGoaliesActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.goaliesStatsService
          .getAllGoalieLeaders(
            data.current_year,
            data.current_season_type,
            data.min_games
          )
          .pipe(
            map((leaders: StatGoalieLeadersDto) =>
              LeagueStatsGoaliesActions.getLeadersSuccess({
                leaders,
              })
            ),
            catchError(() => of(LeagueStatsGoaliesActions.error()))
          )
      )
    )
  );
}
