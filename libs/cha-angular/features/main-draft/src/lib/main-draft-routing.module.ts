import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainDraftComponent } from './containers';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainDraftComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current',
      },
      {
        path: 'current',
        loadChildren: () =>
          import('@cha/cha-angular/features/draft-current').then(
            (mod) => mod.ChaAngularFeaturesDraftCurrentModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('@cha/cha-angular/features/draft-summary').then(
            (mod) => mod.ChaAngularFeaturesDraftSummaryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainDraftRoutingModule {}
