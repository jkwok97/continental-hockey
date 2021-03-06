import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-ang-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  styleUrls: ['./nhl-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsComponent {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  selectOptions = [
    { label: 'Skaters', value: 'skater' },
    { label: 'Goalies', value: 'goalie' },
    { label: 'Rookies', value: 'rookie' },
  ];

  showSkaters = true;
  showGoalies = false;
  showRookies = false;

  constructor(private nhlStatsFacade: NhlStatsFacade) {
    this.isLoaded$ = this.nhlStatsFacade.isLoaded$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
    this.nhlStatsFacade.getSportsnetStats('2021', 'reg');
    this.nhlStatsFacade.getRookieStats('skater', 'points', 'DESC', 0, 100);
  }

  onOptionChanged(option: string) {
    switch (option) {
      case 'skater':
        this.setSkaters(option);
        break;
      case 'goalie':
        this.setGoalies(option);
        break;
      case 'rookie':
        this.setRookies(option);
        break;
      default:
        return;
    }
  }

  setSkaters(option: string) {
    this.showSkaters = true;
    this.showGoalies = false;
    this.showRookies = false;
  }

  setGoalies(option: string) {
    this.showSkaters = false;
    this.showRookies = false;
    this.showGoalies = true;
  }

  setRookies(option: string) {
    this.showRookies = true;
    this.showGoalies = false;
    this.showSkaters = false;
  }
}
