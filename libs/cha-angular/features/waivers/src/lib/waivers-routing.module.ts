import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { WaiversComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: WaiversComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class WaiversRoutingModule {}
