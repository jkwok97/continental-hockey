import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NhlTwitterComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: NhlTwitterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class NhlTwitterRoutingModule {}
