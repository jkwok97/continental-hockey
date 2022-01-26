import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-team',
  templateUrl: './league-stats-team.component.html',
  styleUrls: ['./league-stats-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
