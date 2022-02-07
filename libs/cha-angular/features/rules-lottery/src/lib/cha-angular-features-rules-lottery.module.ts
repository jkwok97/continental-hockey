import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesLotteryRoutingModule } from './rules-lottery-routing.module';

import { RulesLotteryComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesLotteryRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesLotteryComponent],
})
export class ChaAngularFeaturesRulesLotteryModule {}
