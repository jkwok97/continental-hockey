import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { NhlLeadersComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: NhlLeadersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class NhlLeadersRoutingModule {}