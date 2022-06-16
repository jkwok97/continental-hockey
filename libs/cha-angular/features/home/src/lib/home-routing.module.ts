/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
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
      {
        path: 'awards',
        loadChildren: () =>
          import('@cha/cha-angular/features/home-awards').then(
            (mod) => mod.ChaAngularFeaturesHomeAwardsModule
          ),
      },
      {
        path: 'current-goalies',
        loadChildren: () =>
          import('@cha/cha-angular/features/home-current-goalies').then(
            (mod) => mod.ChaAngularFeaturesHomeCurrentGoaliesModule
          ),
      },
      {
        path: 'current-players',
        loadChildren: () =>
          import('@cha/cha-angular/features/home-current-players').then(
            (mod) => mod.ChaAngularFeaturesHomeCurrentPlayersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
