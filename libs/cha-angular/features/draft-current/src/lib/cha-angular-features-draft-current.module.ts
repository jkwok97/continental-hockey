import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularTableModule } from '@cha/shared/ui/angular/table';

import { DraftCurrentRoutingModule } from './draft-current-routing.module';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    TableModule,
    SharedUiAngularTableModule,
    DraftCurrentRoutingModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [DraftCurrentComponent],
})
export class ChaAngularFeaturesDraftCurrentModule {}
