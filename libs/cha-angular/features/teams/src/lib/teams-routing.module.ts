import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TeamsComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
      },
      {
        path: ':teamId',
        loadChildren: () =>
          import('@cha/cha-angular/features/teams-summary').then(
            (mod) => mod.ChaAngularFeaturesTeamsSummaryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
