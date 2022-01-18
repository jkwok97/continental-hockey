import { Component } from '@angular/core';
import { ChaAngLogoEnum } from '@continental-hockey-next/shared/ui/angular/logo';

@Component({
  selector: 'continental-hockey-next-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'continental-hockey-backoffice-angular';

  logo = ChaAngLogoEnum.KILLER_BEES;
  logoHeight = '150px';
  logoWidth = '150px';
}
