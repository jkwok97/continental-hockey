import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StatPlayerLeaderDto } from '@cha/shared/api';
import { Observable } from 'rxjs';
import { LeagueStatsPlayersFacade } from '../../+state/league-stats-players.facade';

@Component({
  selector: 'cha-ang-league-stats-players',
  templateUrl: './league-stats-players.component.html',
  styleUrls: ['./league-stats-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsPlayersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  pointsLeaders$: Observable<StatPlayerLeaderDto[]>;
  defenseLeaders$: Observable<StatPlayerLeaderDto[]>;
  rookieLeaders$: Observable<StatPlayerLeaderDto[]>;
  goalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  assistsLeaders$: Observable<StatPlayerLeaderDto[]>;
  shotsLeaders$: Observable<StatPlayerLeaderDto[]>;
  minutesLeaders$: Observable<StatPlayerLeaderDto[]>;
  ppGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  shGoalsLeaders$: Observable<StatPlayerLeaderDto[]>;
  penaltyLeaders$: Observable<StatPlayerLeaderDto[]>;
  blockedShotsLeaders$: Observable<StatPlayerLeaderDto[]>;
  hitsLeaders$: Observable<StatPlayerLeaderDto[]>;
  currStreakLeaders$: Observable<StatPlayerLeaderDto[]>;
  longStreakLeaders$: Observable<StatPlayerLeaderDto[]>;
  bestPlusMinusLeaders$: Observable<StatPlayerLeaderDto[]>;

  constructor(private leagueStatsPlayersFacade: LeagueStatsPlayersFacade) {
    this.isLoaded$ = this.leagueStatsPlayersFacade.isLoaded$;
    this.isLoading$ = this.leagueStatsPlayersFacade.isLoading$;

    this.pointsLeaders$ = this.leagueStatsPlayersFacade.pointsLeaders$;
    this.defenseLeaders$ = this.leagueStatsPlayersFacade.defenseLeaders$;
    this.rookieLeaders$ = this.leagueStatsPlayersFacade.rookieLeaders$;
    this.goalsLeaders$ = this.leagueStatsPlayersFacade.goalsLeaders$;
    this.assistsLeaders$ = this.leagueStatsPlayersFacade.assistsLeaders$;
    this.shotsLeaders$ = this.leagueStatsPlayersFacade.shotsLeaders$;
    this.minutesLeaders$ = this.leagueStatsPlayersFacade.minutesLeaders$;
    this.ppGoalsLeaders$ = this.leagueStatsPlayersFacade.ppGoalsLeaders$;
    this.shGoalsLeaders$ = this.leagueStatsPlayersFacade.shGoalsLeaders$;
    this.penaltyLeaders$ = this.leagueStatsPlayersFacade.penaltiesLeaders$;
    this.blockedShotsLeaders$ = this.leagueStatsPlayersFacade.blockedShotsLeaders$;
    this.hitsLeaders$ = this.leagueStatsPlayersFacade.hitsLeaders$;
    this.currStreakLeaders$ = this.leagueStatsPlayersFacade.currStreakLeaders$;
    this.longStreakLeaders$ = this.leagueStatsPlayersFacade.longStreakLeaders$;
    this.bestPlusMinusLeaders$ = this.leagueStatsPlayersFacade.bestPlusMinusLeaders$;
  }

  ngOnInit(): void {
    this.leagueStatsPlayersFacade.getLeagueTeamStats();
  }
}
