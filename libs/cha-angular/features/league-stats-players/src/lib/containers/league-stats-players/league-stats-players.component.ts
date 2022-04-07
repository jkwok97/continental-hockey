import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LeagueStatsPlayersFacade } from '../../+state/league-stats-players.facade';

@Component({
  selector: 'cha-ang-league-stats-players',
  templateUrl: './league-stats-players.component.html',
  styleUrls: ['./league-stats-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStatsPlayersComponent implements OnInit {
  constructor(private leagueStatsPlayersFacade: LeagueStatsPlayersFacade) {}

  ngOnInit(): void {
    this.leagueStatsPlayersFacade.getLeagueTeamStats();
  }
}
