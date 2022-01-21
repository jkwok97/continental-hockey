import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChaAngLogoEnum } from '@cha/shared/ui/angular/logo';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'cha-ang-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  logo = ChaAngLogoEnum.OAK;
  logoHeight = 500;
  logoWidth = 500;
  hasIcon = true;
  iconType = PrimeIcons.AMAZON;

  handleClick(event: MouseEvent) {
    console.log(event);
  }
}
