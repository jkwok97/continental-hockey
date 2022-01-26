import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCurrentGoaliesRoutingModule } from './home-current-goalies-routing.module';

import { HomeCurrentGoaliesComponent } from './containers';

@NgModule({
  imports: [CommonModule, HomeCurrentGoaliesRoutingModule],
  declarations: [HomeCurrentGoaliesComponent],
})
export class ChaAngularFeaturesHomeCurrentGoaliesModule {}
