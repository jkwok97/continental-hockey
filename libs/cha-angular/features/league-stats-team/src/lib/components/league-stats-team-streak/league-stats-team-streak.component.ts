import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-team-streak',
  templateUrl: './league-stats-team-streak.component.html',
  styleUrls: ['./league-stats-team-streak.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsTeamStreakComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
