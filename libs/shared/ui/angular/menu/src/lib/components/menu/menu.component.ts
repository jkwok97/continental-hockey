import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cha-ang-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];
}
