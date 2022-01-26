import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeCurrentGoaliesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeCurrentGoaliesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomeCurrentGoaliesRoutingModule {}
