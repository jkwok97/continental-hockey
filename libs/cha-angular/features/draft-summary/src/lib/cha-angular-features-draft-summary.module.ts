import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularTableModule } from '@cha/shared/ui/angular/table';
import { SharedUiAngularDividerModule } from '@cha/shared/ui/angular/divider';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { reducer } from './+state/draft-summary.reducer';
import { DraftSummaryEffects } from './+state/draft-summary.effects';
import { DraftSummaryFacade } from './+state/draft-summary.facade';

import { DraftSummaryRoutingModule } from './draft-summary-routing.module';

import { DraftSummaryComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    DraftSummaryRoutingModule,
    
    ProgressBarModule,

    SharedUiAngularTableModule,
    SharedUiAngularDividerModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
    
    StoreModule.forFeature('draft-summary', reducer),
    EffectsModule.forFeature([DraftSummaryEffects]),
  ],
  declarations: [DraftSummaryComponent],
  providers: [DraftSummaryEffects, DraftSummaryFacade],
})
export class ChaAngularFeaturesDraftSummaryModule {}
