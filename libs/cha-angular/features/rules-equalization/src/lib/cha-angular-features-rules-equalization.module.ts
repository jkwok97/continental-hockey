import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { RulesEqualizationRoutingModule } from './rules-equalization-routing.module';

import { RulesEqualizationComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesEqualizationRoutingModule,
    SharedUiAngularCardModule,
  ],
  declarations: [RulesEqualizationComponent],
})
export class ChaAngularFeaturesRulesEqualizationModule {}
