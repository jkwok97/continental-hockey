import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueStatsTeamFacade } from '../../+state/league-stats-team.facade';

@Component({
  selector: 'cha-ang-league-stats-team',
  templateUrl: './league-stats-team.component.html',
  styleUrls: ['./league-stats-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsTeamComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueStatsTeamFacade: LeagueStatsTeamFacade) {
    this.isLoading$ = this.leagueStatsTeamFacade.isLoading$;
    this.isLoaded$ = this.leagueStatsTeamFacade.isLoaded$;
  }

  ngOnInit(): void {
    this.leagueStatsTeamFacade.getLeagueTeamStats();
  }
}
