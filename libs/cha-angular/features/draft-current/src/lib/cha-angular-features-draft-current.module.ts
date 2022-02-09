import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularTableModule } from '@cha/shared/ui/angular/table';
import { SharedUiAngularDividerModule } from '@cha/shared/ui/angular/divider';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { reducer } from './+state/draft-current.reducer';
import { DraftCurrentEffects } from './+state/draft-current.effects';
import { DraftCurrentFacade } from './+state/draft-current.facade';

import { DraftCurrentRoutingModule } from './draft-current-routing.module';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    SharedUiAngularTableModule,
    SharedUiAngularDividerModule,
    SharedUiAngularCardModule,
    DraftCurrentRoutingModule,
    SharedUiAngularLayoutModule,
    StoreModule.forFeature('draft-current', reducer),
    EffectsModule.forFeature([DraftCurrentEffects]),
  ],
  declarations: [DraftCurrentComponent],
  providers: [DraftCurrentEffects, DraftCurrentFacade],
})
export class ChaAngularFeaturesDraftCurrentModule {}
