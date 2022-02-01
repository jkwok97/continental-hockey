import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { RulesLotteryRoutingModule } from './rules-lottery-routing.module';

import { RulesLotteryComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesLotteryRoutingModule, SharedUiAngularCardModule],
  declarations: [RulesLotteryComponent],
})
export class ChaAngularFeaturesRulesLotteryModule {}
