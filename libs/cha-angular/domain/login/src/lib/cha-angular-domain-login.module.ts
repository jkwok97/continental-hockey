import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './containers';
import { SharedUiAngularButtonModule } from '@cha/shared/ui/angular/button';
import { SharedUiAngularLogoModule } from '@cha/shared/ui/angular/logo';

@NgModule({
  imports: [
    CommonModule,
    SharedUiAngularLogoModule,
    SharedUiAngularButtonModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class ChaAngularDomainLoginModule {}
