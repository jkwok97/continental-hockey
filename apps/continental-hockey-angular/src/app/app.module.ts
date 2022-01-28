import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToastModule } from 'primeng/toast';

import { ChaAngularDomainLoginModule } from '@cha/cha-angular/domain/login';
import { SharedUiAngularFormsModule } from '@cha/shared/ui/angular/forms';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { ChaAngularDomainMainTitleModule } from '@cha/cha-angular/domain/main-title';
import { SharedAuthAngularModule } from '@cha/shared/auth/angular/auth-angular';
import { APP_CONFIG } from '@cha/cha-angular/domain/app-config';
import { ChaAngularDomainCoreModule } from '@cha/cha-angular/domain/core';
import { SharedApiModule } from '@cha/shared/api';
import { SharedRouterModule } from '@cha/shared/router';

import { AppComponent } from './app.component';
import { AppConfigService } from '../services';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-router.module';
import { MessageService } from 'primeng/api';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.setAppConfig();
  };
};

const getConfig = (appConfig: AppConfigService) => {
  return appConfig.getConfig();
};

const getApiUrl = (appConfig: AppConfigService) => {
  return appConfig.getConfig().apiUrl;
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    ChaAngularDomainLoginModule,
    SharedUiAngularFormsModule,
    SharedUiAngularLayoutModule,
    SharedAuthAngularModule,
    SharedRouterModule,
    ChaAngularDomainMainTitleModule,
    AppRoutingModule,
    ChaAngularDomainCoreModule,
    SharedApiModule,

    EffectsModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
      name: 'Continental Hockey Association',
      logOnly: environment.production,
    }),
    ToastModule,
  ],
  providers: [
    MessageService,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: APP_CONFIG,
      useFactory: getConfig,
      multi: false,
      deps: [AppConfigService],
    },
    {
      provide: 'apiUrl',
      useFactory: getApiUrl,
      multi: false,
      deps: [AppConfigService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
