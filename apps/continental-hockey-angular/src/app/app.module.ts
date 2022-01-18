import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiAngularLogoModule } from '@continental-hockey-next/shared/ui/angular/logo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiAngularLogoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
