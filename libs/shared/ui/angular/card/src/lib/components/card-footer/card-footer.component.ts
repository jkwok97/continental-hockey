import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'cha-ang-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['../../scss/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardFooterComponent {
  @HostBinding('class') class = 'cha-card-footer';
}
