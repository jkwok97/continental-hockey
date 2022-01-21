import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';

import { ControlWrapperComponent } from './wrappers';
import { EmailInputComponent } from './types';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'control-wrapper', component: ControlWrapperComponent },
      ],
      types: [
        {
          name: 'email-input',
          component: EmailInputComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  declarations: [EmailInputComponent, ControlWrapperComponent],
})
export class SharedUiAngularFormsModule {}
