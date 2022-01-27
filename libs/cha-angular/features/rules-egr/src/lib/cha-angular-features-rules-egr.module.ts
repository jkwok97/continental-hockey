import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesEgrRoutingModule } from './rules-egr-routing.module';

import { RulesEgrComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesEgrRoutingModule],
  declarations: [RulesEgrComponent],
})
export class ChaAngularFeaturesRulesEgrModule {}
