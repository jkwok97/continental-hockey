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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainLeagueRoutingModule {}
