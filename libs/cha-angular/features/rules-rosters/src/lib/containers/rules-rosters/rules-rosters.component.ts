import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-rosters',
  templateUrl: './rules-rosters.component.html',
  styleUrls: ['./rules-rosters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesRostersComponent {

  background = 'assets/images/sidney-crosby-mario-lemieux.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

}
