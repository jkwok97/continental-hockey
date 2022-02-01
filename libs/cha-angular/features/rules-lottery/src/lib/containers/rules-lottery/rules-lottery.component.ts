import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-lottery',
  templateUrl: './rules-lottery.component.html',
  styleUrls: ['./rules-lottery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesLotteryComponent {
  background = 'assets/images/gretzky.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
