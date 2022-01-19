import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cha-ang-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type = 'button';
  @Input() hasIcon = false;
  @Input() iconType = '';
  @Input() iconPosition: 'left' | 'right' | 'top' | 'bottom' = 'left';
}
