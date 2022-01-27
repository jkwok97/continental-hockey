import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhlTwitterRoutingModule } from './nhl-twitter-routing.module';

import { NhlTwitterComponent } from './containers';

@NgModule({
  imports: [CommonModule, NhlTwitterRoutingModule],
  declarations: [NhlTwitterComponent],
})
export class ChaAngularFeaturesNhlTwitterModule {}
