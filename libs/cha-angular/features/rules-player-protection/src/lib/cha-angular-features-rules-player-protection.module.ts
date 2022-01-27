import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesPlayerProtectionRoutingModule } from './rules-player-protection-routing.module';

import { RulesPlayerProtectionComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesPlayerProtectionRoutingModule],
  declarations: [RulesPlayerProtectionComponent],
})
export class ChaAngularFeaturesRulesPlayerProtectionModule {}
