import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { LeagueDraftFacade } from '@cha/cha-angular/domain/core';
import { DraftTableDto } from '@cha/shared/api';

@Component({
  selector: 'cha-ang-draft-current',
  templateUrl: './draft-current.component.html',
  styleUrls: ['./draft-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftCurrentComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoaded$: Observable<boolean>;
  draftTableItems$: Observable<DraftTableDto[]>;

  constructor(private leagueDraftFacade: LeagueDraftFacade) {
    this.isLoading$ = this.leagueDraftFacade.isLoading$;
    this.isLoaded$ = this.leagueDraftFacade.isLoaded$;
    this.draftTableItems$ = this.leagueDraftFacade.draftTable$;
  }
  ngOnInit(): void {
    this.leagueDraftFacade.getDraftTable(2022, '2021-22', 'Regular');
  }
}
