import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-games-all',
  templateUrl: './games-all.component.html',
  styleUrls: ['./games-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
