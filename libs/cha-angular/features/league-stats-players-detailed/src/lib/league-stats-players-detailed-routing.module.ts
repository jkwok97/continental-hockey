import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsPlayersDetailedComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsPlayersDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsPlayersDetailedRoutingModule {}