import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesWinningsProtectionRoutingModule } from './rules-winnings-routing.module';

import { RulesWinningsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesWinningsProtectionRoutingModule,

    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesWinningsComponent],
})
export class ChaAngularFeaturesRulesWinningsModule {}
