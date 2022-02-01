import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-egr',
  templateUrl: './rules-egr.component.html',
  styleUrls: ['./rules-egr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesEgrComponent {

  background = 'assets/images/brodeur.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

}
