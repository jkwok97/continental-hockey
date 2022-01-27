import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesWaiversProtectionRoutingModule } from './rules-waiver-routing.module';

import { RulesWaiversComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesWaiversProtectionRoutingModule],
  declarations: [RulesWaiversComponent],
})
export class ChaAngularFeaturesRulesWaiversModule {}
