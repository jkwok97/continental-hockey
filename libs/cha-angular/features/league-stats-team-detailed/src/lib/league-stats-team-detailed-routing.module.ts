import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsTeamDetailedComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsTeamDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsTeamDetailedRoutingModule {}
