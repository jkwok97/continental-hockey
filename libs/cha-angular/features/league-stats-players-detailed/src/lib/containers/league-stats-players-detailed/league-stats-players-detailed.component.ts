import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-players-detailed',
  templateUrl: './league-stats-players-detailed.component.html',
  styleUrls: ['./league-stats-players-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsPlayersDetailedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
