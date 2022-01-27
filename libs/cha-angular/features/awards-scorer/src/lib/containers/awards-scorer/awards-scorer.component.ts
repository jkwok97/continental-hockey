import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-awards-scorer',
  templateUrl: './awards-scorer.component.html',
  styleUrls: ['./awards-scorer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardsScorerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
