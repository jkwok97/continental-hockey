import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DisplayFacade } from '@cha/cha-angular/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-layout-feature-content',
  templateUrl: './layout-feature-content.component.html',
  styleUrls: ['./layout-feature-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFeatureContentComponent {
  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }

  panelStyleMobile = {
    width: '100%',
    height: '70vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '78vh',
  };
}
