import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-draft-summary',
  templateUrl: './draft-summary.component.html',
  styleUrls: ['./draft-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraftSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
