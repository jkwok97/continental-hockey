import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesLotteryRoutingModule } from './rules-lottery-routing.module';

import { RulesLotteryComponent } from './containers';

@NgModule({
  imports: [CommonModule, RulesLotteryRoutingModule],
  declarations: [RulesLotteryComponent],
})
export class ChaAngularFeaturesRulesLotteryModule {}
