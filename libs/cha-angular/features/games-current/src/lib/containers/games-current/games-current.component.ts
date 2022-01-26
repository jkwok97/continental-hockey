import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-games-current',
  templateUrl: './games-current.component.html',
  styleUrls: ['./games-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesCurrentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
