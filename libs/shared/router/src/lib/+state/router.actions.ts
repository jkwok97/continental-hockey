import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

const init = createAction('[Router] INIT');

const go = createAction(
  '[Router] Go',
  props<{
    path?: any[];
    url?: string;
    query?: Record<string, unknown>;
    extras?: NavigationExtras;
  }>()
);

const goByUrl = createAction(
  '[Router] Go By Url',
  props<{
    path?: any[];
    url?: string;
    query?: Record<string, unknown>;
    extras?: NavigationExtras;
  }>()
);

const back = createAction('[Router] BACK');

const forward = createAction('[Router] FORWARD');

export const routerActions = {
  init,
  go,
  goByUrl,
  back,
  forward,
};
