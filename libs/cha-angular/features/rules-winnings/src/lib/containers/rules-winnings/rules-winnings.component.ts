import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-rules-winnings',
  templateUrl: './rules-winnings.component.html',
  styleUrls: ['./rules-winnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesWinningsComponent {
  background = 'assets/images/oilers-old.jpg';
}
