import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-awards-season',
  templateUrl: './awards-season.component.html',
  styleUrls: ['./awards-season.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardsSeasonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
