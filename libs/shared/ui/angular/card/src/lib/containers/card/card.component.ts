import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cha-ang-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../scss/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @HostBinding('class') class = 'cha-card';
}
