import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueHistoryGoaliesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueHistoryGoaliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueHistoryGoaliesRoutingModule {}