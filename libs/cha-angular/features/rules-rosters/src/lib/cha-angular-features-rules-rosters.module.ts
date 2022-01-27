import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRostersProtectionRoutingModule } from './rules-rosters-routing.module';

import { RulesRostersComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesRostersProtectionRoutingModule],
  declarations: [RulesRostersComponent],
})
export class ChaAngularFeaturesRulesRostersModule {}
