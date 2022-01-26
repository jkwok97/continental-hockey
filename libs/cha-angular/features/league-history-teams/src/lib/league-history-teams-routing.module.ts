import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LeagueHistoryTeamsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueHistoryTeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueHistoryTeamsRoutingModule {}