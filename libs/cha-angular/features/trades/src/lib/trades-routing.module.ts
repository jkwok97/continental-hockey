import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TradesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TradesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class TradesRoutingModule {}