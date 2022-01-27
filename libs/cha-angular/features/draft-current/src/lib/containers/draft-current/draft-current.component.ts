import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cha-ang-draft-current',
  templateUrl: './draft-current.component.html',
  styleUrls: ['./draft-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraftCurrentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
