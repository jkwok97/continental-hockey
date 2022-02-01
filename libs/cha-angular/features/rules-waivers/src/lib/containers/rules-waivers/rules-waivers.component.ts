import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-waivers',
  templateUrl: './rules-waivers.component.html',
  styleUrls: ['./rules-waivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesWaiversComponent {

  background = 'assets/images/lidstrom.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

}
