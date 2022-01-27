import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsGoalieRoutingModule } from './awards-goalie-routing.module';

import { AwardsGoalieComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsGoalieRoutingModule],
  declarations: [AwardsGoalieComponent],
})
export class ChaAngularFeaturesAwardsGoalieModule {}
