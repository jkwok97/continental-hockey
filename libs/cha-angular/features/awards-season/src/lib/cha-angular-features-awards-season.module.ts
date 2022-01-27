import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsSeasonRoutingModule } from './awards-season-routing.module';

import { AwardsSeasonComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsSeasonRoutingModule],
  declarations: [AwardsSeasonComponent],
})
export class ChaAngularFeaturesAwardsSeasonModule {}
