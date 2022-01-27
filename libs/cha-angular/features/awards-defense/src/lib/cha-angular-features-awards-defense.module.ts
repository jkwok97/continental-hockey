import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsDefenseRoutingModule } from './awards-defense-routing.module';

import { AwardsDefenseComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsDefenseRoutingModule],
  declarations: [AwardsDefenseComponent],
})
export class ChaAngularFeaturesAwardsDefenseModule {}
