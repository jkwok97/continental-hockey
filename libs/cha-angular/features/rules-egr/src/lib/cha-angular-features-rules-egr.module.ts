import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { RulesEgrRoutingModule } from './rules-egr-routing.module';

import { RulesEgrComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesEgrRoutingModule, SharedUiAngularCardModule],
  declarations: [RulesEgrComponent],
})
export class ChaAngularFeaturesRulesEgrModule {}
