import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeCurrentPlayersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeCurrentPlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomeCurrentPlayersRoutingModule {}
