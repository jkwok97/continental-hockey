import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cha-ang-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectButtonComponent {

  @Input() options: any[];

  constructor() {
    this.options = [];
   }

}
