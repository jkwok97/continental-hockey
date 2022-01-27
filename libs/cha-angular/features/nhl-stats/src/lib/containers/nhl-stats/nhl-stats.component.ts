import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-nhl-stats',
  templateUrl: './nhl-stats.component.html',
  styleUrls: ['./nhl-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NhlStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
