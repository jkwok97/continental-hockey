import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { DraftCurrentRoutingModule } from './draft-current-routing.module';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    DraftCurrentRoutingModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [DraftCurrentComponent],
})
export class ChaAngularFeaturesDraftCurrentModule {}
