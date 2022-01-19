import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiAngularButtonModule } from '@continental-hockey-next/shared/ui/angular/button';
import { SharedUiAngularLogoModule } from '@continental-hockey-next/shared/ui/angular/logo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiAngularLogoModule,
    SharedUiAngularButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
