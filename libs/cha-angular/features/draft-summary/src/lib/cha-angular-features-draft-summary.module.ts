import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftSummaryRoutingModule } from './draft-summary-routing.module';

import { DraftSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, DraftSummaryRoutingModule],
  declarations: [
    DraftSummaryComponent
  ],
})
export class ChaAngularFeaturesDraftSummaryModule {}
