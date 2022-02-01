import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { RulesWinningsProtectionRoutingModule } from './rules-winnings-routing.module';

import { RulesWinningsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesWinningsProtectionRoutingModule,

    SharedUiAngularLayoutModule,
    SharedUiAngularCardModule,
  ],
  declarations: [RulesWinningsComponent],
})
export class ChaAngularFeaturesRulesWinningsModule {}
