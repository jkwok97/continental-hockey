import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { coreReducer } from './states';
import { UserTeamEffects } from './states/user-team/user-team.effects';
import { UserTeamFacade } from './states/user-team/user-team.facade';
import { DisplayEffects } from './states/display/display.effects';
import { DisplayFacade } from '..';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', coreReducer),
    EffectsModule.forFeature([UserTeamEffects, DisplayEffects]),
  ],
  providers: [UserTeamEffects, UserTeamFacade, DisplayFacade, DisplayEffects],
})
export class ChaAngularDomainCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ChaAngularDomainCoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'ChaAngularDomainCoreModule is already loaded. Import only in AppModule'
      );
    }
  }
}
