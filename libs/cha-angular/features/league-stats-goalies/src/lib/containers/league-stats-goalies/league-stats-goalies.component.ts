import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StatGoalieLeaderDto } from '@cha/shared/api';
import { Observable } from 'rxjs';
import { LeagueStatsGoaliesFacade } from '../../+state/league-stats-goalies.facade';

@Component({
  selector: 'cha-ang-league-stats-goalies',
  templateUrl: './league-stats-goalies.component.html',
  styleUrls: ['./league-stats-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsGoaliesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  winsLeaders$: Observable<StatGoalieLeaderDto[]>;
  gaaLeaders$: Observable<StatGoalieLeaderDto[]>;
  savePctLeaders$: Observable<StatGoalieLeaderDto[]>;
  shotsFacedLeaders$: Observable<StatGoalieLeaderDto[]>;
  shutoutLeaders$: Observable<StatGoalieLeaderDto[]>;

  constructor(private leagueStatsGoalieFacade: LeagueStatsGoaliesFacade) {
    this.isLoaded$ = this.leagueStatsGoalieFacade.isLoaded$;
    this.isLoading$ = this.leagueStatsGoalieFacade.isLoading$;

    this.winsLeaders$ = this.leagueStatsGoalieFacade.winsLeaders$;
    this.gaaLeaders$ = this.leagueStatsGoalieFacade.gaaLeaders$;
    this.savePctLeaders$ = this.leagueStatsGoalieFacade.savePctLeaders$;
    this.shotsFacedLeaders$ = this.leagueStatsGoalieFacade.shotsFacedLeaders$;
    this.shutoutLeaders$ = this.leagueStatsGoalieFacade.shutoutsLeaders$;
  }

  ngOnInit(): void {
    this.leagueStatsGoalieFacade.getLeagueTeamStats();
  }
}
