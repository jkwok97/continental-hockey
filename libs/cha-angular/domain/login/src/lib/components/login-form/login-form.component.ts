import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmailValidatorMessage } from '@cha/shared/ui/angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'cha-ang-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'email-input',
      templateOptions: {
        label: 'Email',
        placeholder: 'john.doe@email.com',
        required: true,
      },
      modelOptions: {
        updateOn: 'change',
      },
      validators: {
        validation: ['email'],
      },
      validation: {
        messages: {
          required: 'Email is required',
          email: EmailValidatorMessage,
        },
      },
    },
  ];
}
