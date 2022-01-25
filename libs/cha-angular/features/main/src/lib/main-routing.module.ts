import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      // {
      //   path: 'home',
      //   component: MainComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
