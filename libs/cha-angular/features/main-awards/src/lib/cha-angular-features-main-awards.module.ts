import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAwardsRoutingModule } from './main-awards-routing.module';

import { MainAwardsComponent } from './containers';

@NgModule({
  imports: [CommonModule, MainAwardsRoutingModule],
  declarations: [MainAwardsComponent],
})
export class ChaAngularFeaturesMainAwardsModule {}
