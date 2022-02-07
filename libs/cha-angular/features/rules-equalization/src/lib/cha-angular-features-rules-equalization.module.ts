import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesEqualizationRoutingModule } from './rules-equalization-routing.module';

import { RulesEqualizationComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesEqualizationRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesEqualizationComponent],
})
export class ChaAngularFeaturesRulesEqualizationModule {}
