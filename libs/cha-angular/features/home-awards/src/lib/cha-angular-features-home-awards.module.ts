import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAwardsRoutingModule } from './home-awards-routing.module';

import { HomeAwardsComponent } from './containers';

@NgModule({
  imports: [CommonModule, HomeAwardsRoutingModule],
  declarations: [HomeAwardsComponent],
})
export class ChaAngularFeaturesHomeAwardsModule {}
