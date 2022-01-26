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
      {
        path: 'players',
        loadChildren: () =>
          import('@cha/cha-angular/features/league-stats-players').then(
            (mod) => mod.ChaAngularFeaturesLeagueStatsPlayersModule
          ),
      },
      {
        path: 'goalies',
        loadChildren: () =>
          import('@cha/cha-angular/features/league-stats-goalies').then(
            (mod) => mod.ChaAngularFeaturesLeagueStatsGoaliesModule
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
