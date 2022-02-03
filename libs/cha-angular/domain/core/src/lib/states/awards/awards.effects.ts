import { Injectable } from '@angular/core';
import { AwardDto, AwardsService, UserTeamDto } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AwardActions } from './awards.action';

@Injectable()
export class AwardEffects {
  constructor(private actions$: Actions, private awardService: AwardsService) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.get),
      exhaustMap((action) =>
        this.awardService.getAll().pipe(
          map((awards: AwardDto[]) => AwardActions.getSuccess({ awards })),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );
}
