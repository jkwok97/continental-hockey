import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

import { PrimeButtonClass } from '@cha/shared/api';
import { ChaAngLogoEnum } from '@cha/shared/ui/angular/logo';

@Component({
  selector: 'cha-ang-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginCardComponent {
  PrimeIcons = PrimeIcons;
  PrimeButtonClass = PrimeButtonClass;
  ChaLogo = ChaAngLogoEnum;

  handleClick(event: MouseEvent) {
    console.log(event);
  }
}
