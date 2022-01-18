import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { ChaAngLogoEnum } from '../../model';

@Component({
  selector: 'cha-ang-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
  @Input() logo: ChaAngLogoEnum | undefined;
  @Input() width = '75px';
  @Input() height = '75px';

  teamLogo = '/assets';

  ngOnInit(): void {
    this.teamLogo = `/assets/${this.logo}`;
  }
}
