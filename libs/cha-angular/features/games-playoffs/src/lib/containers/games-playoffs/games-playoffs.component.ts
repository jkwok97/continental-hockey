import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-games-playoffs',
  templateUrl: './games-playoffs.component.html',
  styleUrls: ['./games-playoffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesPlayoffsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
