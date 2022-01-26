import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-history-players',
  templateUrl: './league-history-players.component.html',
  styleUrls: ['./league-history-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueHistoryPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
