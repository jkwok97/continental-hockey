import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-waivers',
  templateUrl: './waivers.component.html',
  styleUrls: ['./waivers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaiversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
