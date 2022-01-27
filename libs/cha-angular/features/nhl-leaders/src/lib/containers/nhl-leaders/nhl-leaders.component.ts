import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-nhl-leaders',
  templateUrl: './nhl-leaders.component.html',
  styleUrls: ['./nhl-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NhlLeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
