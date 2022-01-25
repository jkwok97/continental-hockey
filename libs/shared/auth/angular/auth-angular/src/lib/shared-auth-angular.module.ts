import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthFacade } from './+state/auth.facade';
import { SharedAuthResolver } from './resolvers/auth.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthEffects,
    AuthFacade,
    AuthGuard,
    SharedAuthResolver,
  ],
})
export class SharedAuthAngularModule {
  constructor(@Optional() @SkipSelf() parentModule?: SharedAuthAngularModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
