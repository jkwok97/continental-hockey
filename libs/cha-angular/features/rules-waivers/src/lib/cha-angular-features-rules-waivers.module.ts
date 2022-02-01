import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { RulesWaiversProtectionRoutingModule } from './rules-waiver-routing.module';

import { RulesWaiversComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesWaiversProtectionRoutingModule,
    SharedUiAngularCardModule,
  ],
  declarations: [RulesWaiversComponent],
})
export class ChaAngularFeaturesRulesWaiversModule {}
