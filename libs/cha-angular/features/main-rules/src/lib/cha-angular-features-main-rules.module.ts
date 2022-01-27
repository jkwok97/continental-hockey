import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRulesRoutingModule } from './main-rules-routing.module';

import { MainRulesComponent } from './containers';

@NgModule({
  imports: [CommonModule, MainRulesRoutingModule],
  declarations: [MainRulesComponent],
})
export class ChaAngularFeaturesMainRulesModule {}
