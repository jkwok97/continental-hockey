import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesEqualizationRoutingModule } from './rules-equalization-routing.module';

import { RulesEqualizationComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesEqualizationRoutingModule],
  declarations: [RulesEqualizationComponent],
})
export class ChaAngularFeaturesRulesEqualizationModule {}
