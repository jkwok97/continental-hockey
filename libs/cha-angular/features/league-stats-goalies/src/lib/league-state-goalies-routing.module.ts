import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsGoaliesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsGoaliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsGoaliesRoutingModule {}
