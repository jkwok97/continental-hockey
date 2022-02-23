import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NhlStatsFacade } from '../../+state/nhl-stats.facade';

@Component({
  selector: 'cha-ang-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  styleUrls: ['./nhl-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlStatsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private nhlStatsFacade: NhlStatsFacade) {
    this.isLoaded$ = this.nhlStatsFacade.isLoaded$;
    this.isLoading$ = this.nhlStatsFacade.isLoading$;
  }

  ngOnInit(): void {
    this.nhlStatsFacade.getGoalieStats('goalie', 'wins', 'DESC', 0, 25);
  }
}
