import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainLeagueComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainLeagueComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'stats',
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('@cha/cha-angular/features/league-stats').then(
            (mod) => mod.ChaAngularFeaturesLeagueStatsModule
          ),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('@cha/cha-angular/features/games').then(
            (mod) => mod.ChaAngularFeaturesGamesModule
          ),
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('@cha/cha-angular/features/teams').then(
            (mod) => mod.ChaAngularFeaturesTeamsModule
          ),
      },
      {
        path: 'trades',
        loadChildren: () =>
          import('@cha/cha-angular/features/trades').then(
            (mod) => mod.ChaAngularFeaturesTradesModule
          ),
      },
      {
        path: 'salaries-ratings',
        loadChildren: () =>
          import('@cha/cha-angular/features/salaries-ratings').then(
            (mod) => mod.ChaAngularFeaturesSalariesRatingsModule
          ),
      },
      {
        path: 'waivers',
        loadChildren: () =>
          import('@cha/cha-angular/features/waivers').then(
            (mod) => mod.ChaAngularFeaturesWaiversModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('@cha/cha-angular/features/league-history').then(
            (mod) => mod.ChaAngularFeaturesLeagueHistoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainLeagueRoutingModule {}
