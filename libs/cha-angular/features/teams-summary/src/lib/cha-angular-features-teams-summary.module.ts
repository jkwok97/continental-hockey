import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsSummaryRoutingModule } from './teams-summary-routing.module';

import { TeamsSummaryComponent } from './containers';

@NgModule({
  imports: [CommonModule, TeamsSummaryRoutingModule],
  declarations: [TeamsSummaryComponent],
})
export class ChaAngularFeaturesTeamsSummaryModule {}
