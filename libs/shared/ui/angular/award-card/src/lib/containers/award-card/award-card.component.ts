import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AwardDto, AwardTypeEnum } from '@cha/shared/api';

@Component({
  selector: 'cha-ang-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardCardComponent {
  @Input()
  award!: AwardDto;

  AwardTypeEnum = AwardTypeEnum;

  constructor() {}

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  getColor(color: string) {
    return `${color}95`;
  }
}
