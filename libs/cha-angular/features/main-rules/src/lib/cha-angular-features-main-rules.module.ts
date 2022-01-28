import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainRulesRoutingModule } from './main-rules-routing.module';

import { MainRulesComponent } from './containers';

@NgModule({
  imports: [CommonModule, MainRulesRoutingModule, SharedUiAngularLayoutModule],
  declarations: [MainRulesComponent],
})
export class ChaAngularFeaturesMainRulesModule {}
