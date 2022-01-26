import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsGoaliesDetailedComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsGoaliesDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsGoaliesDetailedRoutingModule {}