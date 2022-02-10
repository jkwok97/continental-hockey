import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'cha-ang-nhl-twitter',
  templateUrl: './nhl-twitter.component.html',
  styleUrls: ['./nhl-twitter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NhlTwitterComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
