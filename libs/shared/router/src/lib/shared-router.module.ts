import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  routerReducer,
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterEffects } from './+state/router.effects';
import { CustomSerializer } from './+state/router-custom-serializer';
import { EffectsModule } from '@ngrx/effects';
import { RouterService } from './services/router-service';

@NgModule({
  imports: [
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [
    RouterEffects,
    RouterService,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
})
export class SharedRouterModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SharedRouterModule
  ) {
    if (parentModule) {
      throw new Error(
        'SharedRouterModule is already loaded. Import only in AppModule'
      );
    }
  }
}
