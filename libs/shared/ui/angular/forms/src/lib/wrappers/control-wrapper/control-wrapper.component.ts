import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'cha-ang-control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
})
export class ControlWrapperComponent extends FieldWrapper {
  constructor() {
    super();
  }

  get errorState() {
    return this.showError ? 'error' : '';
  }
}
