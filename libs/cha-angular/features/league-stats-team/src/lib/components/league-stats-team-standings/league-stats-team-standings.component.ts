import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-team-standings',
  templateUrl: './league-stats-team-standings.component.html',
  styleUrls: ['./league-stats-team-standings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsTeamStandingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
