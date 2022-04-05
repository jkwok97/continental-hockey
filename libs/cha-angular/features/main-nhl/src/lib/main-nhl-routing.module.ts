import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainNhlComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainNhlComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'leaders',
      },
      {
        path: 'leaders',
        loadChildren: () =>
          import('@cha/cha-angular/features/nhl-leaders').then(
            (mod) => mod.ChaAngularFeaturesNhlLeadersModule
          ),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('@cha/cha-angular/features/nhl-stats').then(
            (mod) => mod.ChaAngularFeaturesNhlStatsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainNhlRoutingModule {}
