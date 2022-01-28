import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { SharedUiLogosEnum } from '@cha/shared/api';
import { ChaAngLogoEnum } from '../../model';

@Component({
  selector: 'cha-ang-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
  @Input() logo: ChaAngLogoEnum | undefined;
  @Input() width = 75;
  @Input() height = 75;
  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  @Input() userTeamLogo!: string | undefined;

  teamLogo = '/assets';

  ngOnInit(): void {
    // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
    if (this.userTeamLogo) {
      this.teamLogo = `/assets/${this.getString(this.userTeamLogo)}`;
    } else if (this.logo) {
      this.teamLogo = `/assets/${this.logo}`;
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return temp[temp.length - 1];
  }
}
