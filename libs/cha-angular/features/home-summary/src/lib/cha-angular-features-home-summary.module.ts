import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSummaryRoutingModule } from './home-summary-routing.module';

import { HomeSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, HomeSummaryRoutingModule],
  declarations: [HomeSummaryComponent],
})
export class ChaAngularFeaturesHomeSummaryModule {}
