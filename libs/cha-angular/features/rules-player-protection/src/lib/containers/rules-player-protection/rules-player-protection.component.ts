import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-player-protection',
  templateUrl: './rules-player-protection.component.html',
  styleUrls: ['./rules-player-protection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesPlayerProtectionComponent {
  background = 'assets/images/bure.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
