import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesPlayerProtectionRoutingModule } from './rules-player-protection-routing.module';

import { RulesPlayerProtectionComponent } from './containers';


@NgModule({
  imports: [
    CommonModule,
    RulesPlayerProtectionRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesPlayerProtectionComponent],
})
export class ChaAngularFeaturesRulesPlayerProtectionModule {}
