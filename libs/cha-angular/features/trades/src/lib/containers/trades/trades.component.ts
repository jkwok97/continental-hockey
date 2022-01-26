import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
