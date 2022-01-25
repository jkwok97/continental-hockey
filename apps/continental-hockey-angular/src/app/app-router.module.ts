import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LoginComponent } from '@cha/cha-angular/domain/login';
import { SharedAuthResolver } from '@cha/shared/auth/angular/auth-angular';

const ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('@cha/cha-angular/features/main').then(
        (mod) => mod.ChaAngularFeaturesMainModule
      ),
    resolve: {
      main: SharedAuthResolver,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
