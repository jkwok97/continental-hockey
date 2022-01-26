import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GamesComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current',
      },
      {
        path: 'current',
        loadChildren: () =>
          import('@cha/cha-angular/features/games-current').then(
            (mod) => mod.ChaAngularFeaturesGamesCurrentModule
          ),
      },
      {
        path: 'upcoming',
        loadChildren: () =>
          import('@cha/cha-angular/features/games-upcoming').then(
            (mod) => mod.ChaAngularFeaturesGamesUpcomingModule
          ),
      },
      {
        path: 'all',
        loadChildren: () =>
          import('@cha/cha-angular/features/games-all').then(
            (mod) => mod.ChaAngularFeaturesGamesAllModule
          ),
      },
      {
        path: 'playoffs',
        loadChildren: () =>
          import('@cha/cha-angular/features/games-playoffs').then(
            (mod) => mod.ChaAngularFeaturesGamesPlayoffsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
