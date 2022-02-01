import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-rules-equalization',
  templateUrl: './rules-equalization.component.html',
  styleUrls: ['./rules-equalization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesEqualizationComponent {
  background = 'assets/images/howe.jpg';

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
