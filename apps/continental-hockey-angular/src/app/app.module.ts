import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChaAngularDomainLoginModule } from '@cha/cha-angular/domain/login';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChaAngularDomainLoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
