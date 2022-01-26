import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-league-history',
  templateUrl: './league-history.component.html',
  styleUrls: ['./league-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
