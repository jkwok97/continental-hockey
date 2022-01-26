import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary',
      },
      {
        path: 'summary',
        loadChildren: () =>
          import('@cha/cha-angular/features/home-summary').then(
            (mod) => mod.ChaAngularFeaturesHomeSummaryModule
          ),
      },
      {
        path: 'franchise',
        loadChildren: () =>
          import('@cha/cha-angular/features/home-franchise').then(
            (mod) => mod.ChaAngularFeaturesHomeFranchiseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
