import { Injectable } from '@angular/core';
import { LeagueDataFacade } from '@cha/cha-angular/domain/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';

@Injectable()
export class LeagueStatsTeamEffects {
  constructor(
    private actions$: Actions,
    private leagueDataFacade: LeagueDataFacade
  ) {}
}
