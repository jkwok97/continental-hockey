import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChaAngularDomainLoginModule } from '@cha/cha-angular/domain/login';
import { SharedUiAngularFormsModule } from '@cha/shared/ui/angular/forms';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { ChaAngularDomainMainTitleModule } from '@cha/cha-angular/domain/main-title';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChaAngularDomainLoginModule,
    SharedUiAngularFormsModule,
    SharedUiAngularLayoutModule,
    ChaAngularDomainMainTitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
