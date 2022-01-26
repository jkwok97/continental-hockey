import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-players',
  templateUrl: './league-stats-players.component.html',
  styleUrls: ['./league-stats-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
