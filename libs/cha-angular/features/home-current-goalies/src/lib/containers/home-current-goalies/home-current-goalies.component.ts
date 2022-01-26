import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-home-current-goalies',
  templateUrl: './home-current-goalies.component.html',
  styleUrls: ['./home-current-goalies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCurrentGoaliesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
