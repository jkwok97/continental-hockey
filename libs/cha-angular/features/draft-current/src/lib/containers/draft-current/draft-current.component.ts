import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { LeagueDraftFacade } from '@cha/cha-angular/domain/core';

@Component({
  selector: 'cha-ang-draft-current',
  templateUrl: './draft-current.component.html',
  styleUrls: ['./draft-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftCurrentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;

  constructor(private leagueDraftFacade: LeagueDraftFacade) {
    this.isLoading$ = this.leagueDraftFacade.isLoading$;
    this.isLoaded$ = this.leagueDraftFacade.isLoaded$;
  }
  ngOnInit(): void {
    this.leagueDraftFacade.getDraftTable(2022);
  }
}
