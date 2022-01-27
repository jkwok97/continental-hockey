import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesWinningsProtectionRoutingModule } from './rules-winnings-routing.module';

import { RulesWinningsComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesWinningsProtectionRoutingModule],
  declarations: [RulesWinningsComponent],
})
export class ChaAngularFeaturesRulesWinningsModule {}
