import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesRostersProtectionRoutingModule } from './rules-rosters-routing.module';

import { RulesRostersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesRostersProtectionRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesRostersComponent],
})
export class ChaAngularFeaturesRulesRostersModule {}
