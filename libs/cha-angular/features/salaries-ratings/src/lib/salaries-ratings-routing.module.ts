import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SalariesRatingsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: SalariesRatingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class SalariesRatingsRoutingModule {}