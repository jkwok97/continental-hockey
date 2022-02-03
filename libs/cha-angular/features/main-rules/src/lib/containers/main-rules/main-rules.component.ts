import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-main-rules',
  templateUrl: './main-rules.component.html',
  styleUrls: ['./main-rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainRulesComponent {
  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

  panelStyleMobile = {
    width: '100%',
    height: '72vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '79vh',
  };
}
