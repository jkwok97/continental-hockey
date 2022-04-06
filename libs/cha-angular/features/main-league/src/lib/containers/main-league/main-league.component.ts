import { Component } from '@angular/core';
import { DisplayFacade } from '@cha/cha-angular/domain/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cha-ang-main-league',
  templateUrl: './main-league.component.html',
  styleUrls: ['./main-league.component.scss'],
})
export class MainLeagueComponent {
  panelStyleMobile = {
    width: '100%',
    height: '77vh',
  };

  panelStyleDesktop = {
    width: '100%',
    height: '83vh',
  };

  isMobile$: Observable<boolean>;

  constructor(private displayFacade: DisplayFacade) {
    this.isMobile$ = this.displayFacade.isMobile$;
  }
}
