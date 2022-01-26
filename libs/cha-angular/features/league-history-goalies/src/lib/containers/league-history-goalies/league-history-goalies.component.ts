import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-history-goalies',
  templateUrl: './league-history-goalies.component.html',
  styleUrls: ['./league-history-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueHistoryGoaliesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
