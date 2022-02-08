import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AwardsFacade, DisplayFacade } from '@cha/cha-angular/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-main-draft',
  templateUrl: './main-draft.component.html',
  styleUrls: ['./main-draft.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDraftComponent {
  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
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
