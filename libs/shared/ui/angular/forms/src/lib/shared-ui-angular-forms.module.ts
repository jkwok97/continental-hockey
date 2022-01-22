import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormlyModule } from '@ngx-formly/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { EmailValidator, EmailValidatorMessage } from './validators/email';

import { ControlWrapperComponent } from './wrappers';
import { EmailInputComponent } from './types';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NzFormModule,
    NzInputModule,
    NzIconModule,

    FormlyModule.forRoot({
      wrappers: [
        { name: 'control-wrapper', component: ControlWrapperComponent },
      ],
      types: [
        {
          name: 'email-input',
          component: EmailInputComponent,
          wrappers: ['control-wrapper'],
        },
      ],
      validators: [{ name: 'email', validation: EmailValidator() }],
      validationMessages: [{ name: 'email', message: EmailValidatorMessage }],
    }),
  ],
  declarations: [EmailInputComponent, ControlWrapperComponent],
})
export class SharedUiAngularFormsModule {}
