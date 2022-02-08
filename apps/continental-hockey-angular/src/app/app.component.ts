import { Component } from '@angular/core';
import { DisplayFacade, LeagueDataFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private displayFacade: DisplayFacade,
    private leagueDataFacade: LeagueDataFacade
  ) {
    this.displayFacade.get();
    this.leagueDataFacade.getLeagueData();
  }
}
