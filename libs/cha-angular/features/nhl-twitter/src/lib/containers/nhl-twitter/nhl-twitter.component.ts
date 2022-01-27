import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-nhl-twitter',
  templateUrl: './nhl-twitter.component.html',
  styleUrls: ['./nhl-twitter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NhlTwitterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
