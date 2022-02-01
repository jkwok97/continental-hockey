import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cha-ang-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['../../scss/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardBodyComponent {
  @HostBinding('class') class = 'cha-card-body';
}
