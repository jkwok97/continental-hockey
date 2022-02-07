import { Injectable } from '@angular/core';
import { AwardDto, AwardsService } from '@cha/shared/api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AwardActions } from './awards.action';

@Injectable()
export class AwardEffects {
  constructor(private actions$: Actions, private awardService: AwardsService) {}

  // get$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AwardActions.getChampions),
  //     exhaustMap((action) =>
  //       this.awardService.getAll().pipe(
  //         map((awards: AwardDto[]) =>
  //           AwardActions.getChampionsSuccess({ awards })
  //         ),
  //         catchError(() => of(AwardActions.error()))
  //       )
  //     )
  //   )
  // );

  getChampions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getChampions),
      exhaustMap((action) =>
        this.awardService.getChampions().pipe(
          map((awards: AwardDto[]) =>
            AwardActions.getChampionsSuccess({ awards })
          ),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getScorers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getScorers),
      exhaustMap((action) =>
        this.awardService.getScorers().pipe(
          map((awards: AwardDto[]) =>
            AwardActions.getScorersSuccess({ awards })
          ),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getDefense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getDefense),
      exhaustMap((action) =>
        this.awardService.getDefense().pipe(
          map((awards: AwardDto[]) =>
            AwardActions.getDefenseSuccess({ awards })
          ),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );

  getRookies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AwardActions.getRookies),
      exhaustMap((action) =>
        this.awardService.getRookies().pipe(
          map((awards: AwardDto[]) =>
            AwardActions.getRookiesSuccess({ awards })
          ),
          catchError(() => of(AwardActions.error()))
        )
      )
    )
  );
}
