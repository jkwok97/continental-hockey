import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-teams-summary',
  templateUrl: './teams-summary.component.html',
  styleUrls: ['./teams-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
