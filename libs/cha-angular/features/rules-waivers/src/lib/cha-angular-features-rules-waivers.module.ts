import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesWaiversProtectionRoutingModule } from './rules-waiver-routing.module';

import { RulesWaiversComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesWaiversProtectionRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesWaiversComponent],
})
export class ChaAngularFeaturesRulesWaiversModule {}
