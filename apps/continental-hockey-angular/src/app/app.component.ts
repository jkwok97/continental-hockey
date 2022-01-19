import { Component } from '@angular/core';
import { ChaAngLogoEnum } from '@continental-hockey-next/shared/ui/angular/logo';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'continental-hockey-next-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'continental-hockey-angular';

  logo = ChaAngLogoEnum.OAK;
  logoHeight = '150px';
  logoWidth = '150px';
  hasIcon = true;
  iconType = PrimeIcons.AMAZON;

  handleClick(event: MouseEvent) {
    console.log(event);
  }
}
