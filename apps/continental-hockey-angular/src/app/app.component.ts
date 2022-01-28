import { Component } from '@angular/core';
import { DisplayFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private displayFacade: DisplayFacade) {
    this.displayFacade.get();
  }
}
