import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-goalies',
  templateUrl: './league-stats-goalies.component.html',
  styleUrls: ['./league-stats-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsGoaliesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
