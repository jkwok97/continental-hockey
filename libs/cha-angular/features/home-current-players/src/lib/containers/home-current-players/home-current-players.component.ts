import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-home-current-players',
  templateUrl: './home-current-players.component.html',
  styleUrls: ['./home-current-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCurrentPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
