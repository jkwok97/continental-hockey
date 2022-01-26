import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LeagueStatsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: LeagueStatsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teams',
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('@cha/cha-angular/features/league-stats-team').then(
            (mod) => mod.ChaAngularFeaturesLeagueStatsTeamModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeagueStateRoutingModule {}