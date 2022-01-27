import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsGmRoutingModule } from './awards-gm-routing.module';

import { AwardsGmComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsGmRoutingModule],
  declarations: [AwardsGmComponent],
})
export class ChaAngularFeaturesAwardsGmModule {}
