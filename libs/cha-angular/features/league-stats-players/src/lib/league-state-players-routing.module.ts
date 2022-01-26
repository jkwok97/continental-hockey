import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueStatsPlayersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsPlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStatsPlayersRoutingModule {}
