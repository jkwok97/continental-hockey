import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { SharedUiAngularButtonModule } from '@cha/shared/ui/angular/button';
import { SharedUiAngularLogoModule } from '@cha/shared/ui/angular/logo';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { LoginComponent } from './containers';

import { LoginCardComponent, LoginFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormlyModule,

    SharedUiAngularLogoModule,
    SharedUiAngularButtonModule,
    SharedUiAngularCardModule,
  ],
  declarations: [LoginComponent, LoginCardComponent, LoginFormComponent],
  exports: [LoginComponent],
})
export class ChaAngularDomainLoginModule {}
