import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cha-ang-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() type = 'solid';
  @Input() layout = 'horizontal';
  @Input() align = 'center';
}
