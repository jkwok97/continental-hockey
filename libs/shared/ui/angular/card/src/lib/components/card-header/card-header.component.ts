import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cha-ang-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['../../scss/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardHeaderComponent {
  @HostBinding('class') class = 'cha-card-header';
}
