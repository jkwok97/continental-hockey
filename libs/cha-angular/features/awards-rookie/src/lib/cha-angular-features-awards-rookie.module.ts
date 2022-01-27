import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsRookieRoutingModule } from './awards-rookie-routing.module';

import { AwardsRookieComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsRookieRoutingModule],
  declarations: [AwardsRookieComponent],
})
export class ChaAngularFeaturesAwardsRookieModule {}
