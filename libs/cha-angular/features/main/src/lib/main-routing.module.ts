/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';
import { MainResolver } from './resolvers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
        resolve: [MainResolver],
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@cha/cha-angular/features/home').then(
            (mod) => mod.ChaAngularFeaturesHomeModule
          ),
      },
      {
        path: 'league',
        loadChildren: () =>
          import('@cha/cha-angular/features/main-league').then(
            (mod) => mod.ChaAngularFeaturesMainLeagueModule
          ),
      },
      {
        path: 'nhl',
        loadChildren: () =>
          import('@cha/cha-angular/features/main-nhl').then(
            (mod) => mod.ChaAngularFeaturesMainNhlModule
          ),
      },
      {
        path: 'draft',
        loadChildren: () =>
          import('@cha/cha-angular/features/main-draft').then(
            (mod) => mod.ChaAngularFeaturesMainDraftModule
          ),
      },
      {
        path: 'awards',
        loadChildren: () =>
          import('@cha/cha-angular/features/main-awards').then(
            (mod) => mod.ChaAngularFeaturesMainAwardsModule
          ),
      },
      {
        path: 'rules',
        loadChildren: () =>
          import('@cha/cha-angular/features/main-rules').then(
            (mod) => mod.ChaAngularFeaturesMainRulesModule
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
