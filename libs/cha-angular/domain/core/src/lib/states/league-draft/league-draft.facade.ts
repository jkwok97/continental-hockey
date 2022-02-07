import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './league-draft.reducer';
import { DraftPickDto, DraftTableDto } from '@cha/shared/api';
import { LeagueDraftActions } from './league-draft.actions';
import { LeagueDraftSelectors } from './league-draft.selectors';

@Injectable()
export class LeagueDraftFacade {
  isLoading$: Observable<boolean> = this.store.select(
    LeagueDraftSelectors.selectLoading
  );

  isLoaded$: Observable<boolean> = this.store.select(
    LeagueDraftSelectors.selectLoaded
  );

  draftTable$: Observable<DraftTableDto[]> = this.store.select(
    LeagueDraftSelectors.selectDraftTable
  );

  draftPicks$: Observable<DraftPickDto[]> = this.store.select(
    LeagueDraftSelectors.selectDraftPicks
  );

  constructor(private store: Store<State>) {}

  getDraftTable(draftYear: number) {
    this.store.dispatch(LeagueDraftActions.getDraftTable({ draftYear }));
  }

  getDraftPicks() {
    this.store.dispatch(LeagueDraftActions.getDraftPicks());
  }
}
