import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './league-stats-team.reducer';
import { LeagueStatsTeamSelectors } from './league-stats-team.selectors';

@Injectable()
export class LeagueStatsTeamFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueStatsTeamSelectors.selectLoaded
  );

  constructor(private store: Store<State>) {}
}
