import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhlLeadersRoutingModule } from './nhl-leaders-routing.module';

import { NhlLeadersComponent } from './containers';

@NgModule({
  imports: [CommonModule, NhlLeadersRoutingModule],
  declarations: [NhlLeadersComponent],
})
export class ChaAngularFeaturesNhlLeadersModule {}
