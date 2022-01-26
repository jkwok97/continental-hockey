import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-games-upcoming',
  templateUrl: './games-upcoming.component.html',
  styleUrls: ['./games-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesUpcomingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
