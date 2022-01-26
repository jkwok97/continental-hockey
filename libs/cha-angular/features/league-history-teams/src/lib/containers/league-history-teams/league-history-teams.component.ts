import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-history-teams',
  templateUrl: './league-history-teams.component.html',
  styleUrls: ['./league-history-teams.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueHistoryTeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
