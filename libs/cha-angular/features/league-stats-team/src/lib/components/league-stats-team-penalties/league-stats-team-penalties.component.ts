import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-stats-team-penalties',
  templateUrl: './league-stats-team-penalties.component.html',
  styleUrls: ['./league-stats-team-penalties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueStatsTeamPenaltiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
