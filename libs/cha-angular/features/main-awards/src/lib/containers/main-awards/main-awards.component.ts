import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade, DisplayFacade } from '@cha/cha-angular/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-main-awards',
  templateUrl: './main-awards.component.html',
  styleUrls: ['./main-awards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAwardsComponent {
  panelStyleMobile = {
    width: '100%',
    height: '72vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '79vh',
  };

  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  isMobile$: Observable<boolean>;

  constructor(
    private awardsFacade: AwardsFacade,
    private displayFacade: DisplayFacade
  ) {
    this.isLoading$ = this.awardsFacade.isLoading$;
    this.isLoaded$ = this.awardsFacade.isLoaded$;
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
