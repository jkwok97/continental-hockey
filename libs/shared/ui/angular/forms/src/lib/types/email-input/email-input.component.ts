import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cha-ang-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
})
export class EmailInputComponent extends FieldType {

  override defaultOptions = {
    templateOptions: {
      readonly: false
    },
  };

  constructor() {
    super();
  }
}
