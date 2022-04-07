import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { PlayerStatsService, StatPlayerLeadersDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { LeagueStatsPlayersActions } from './league-stats-players.actions';

@Injectable()
export class LeagueStatsPlayersEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade,
    private playerStatsService: PlayerStatsService
  ) {}

  getLeagueTeamStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeagueStatsPlayersActions.getLeaders),
      withLatestFrom(this.leagueDataFacade.leagueData$),
      exhaustMap(([action, data]) =>
        this.playerStatsService
          .getAllPlayerLeaders(data.current_year, data.current_season_type)
          .pipe(
            map((leaders: StatPlayerLeadersDto) =>
              LeagueStatsPlayersActions.getLeadersSuccess({
                leaders,
              })
            ),
            catchError(() => of(LeagueStatsPlayersActions.error()))
          )
      )
    )
  );
}
