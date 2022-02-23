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

  constructor(private nhlStatsFacade: NhlStatsFacade) {
    this.isLoaded$ = this.nhlStatsFacade.isLoaded$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
  }

  onOptionChanged(option: string) {
    console.log(option);
    switch (option) {
      case 'skater':
        this.nhlStatsFacade.getStats(option, 'points', 'DESC', 0, 25);
        break;
      case 'goalie':
        this.nhlStatsFacade.getGoalieStats(option, 'wins', 'DESC', 0, 25);
        break;
      case 'rookie':
        this.nhlStatsFacade.getRookieStats('skater', 'points', 'DESC', 0, 25);
        break;
      default:
        return;
    }
  }
}
