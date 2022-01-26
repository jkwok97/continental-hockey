import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
