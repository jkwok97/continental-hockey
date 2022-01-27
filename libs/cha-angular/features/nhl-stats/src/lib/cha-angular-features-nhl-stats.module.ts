import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhlStatsRoutingModule } from './nhl-stats-routing.module';

import { NhlStatsComponent } from './containers';

@NgModule({
  imports: [CommonModule, NhlStatsRoutingModule],
  declarations: [NhlStatsComponent],
})
export class ChaAngularFeaturesNhlStatsModule {}
