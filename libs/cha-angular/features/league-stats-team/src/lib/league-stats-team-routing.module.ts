import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsTeamComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsTeamRoutingModule {}
