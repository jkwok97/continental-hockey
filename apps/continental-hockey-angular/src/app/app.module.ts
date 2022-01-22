import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChaAngularDomainLoginModule } from '@cha/cha-angular/domain/login';
import { SharedUiAngularFormsModule } from '@cha/shared/ui/angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChaAngularDomainLoginModule,
    SharedUiAngularFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
