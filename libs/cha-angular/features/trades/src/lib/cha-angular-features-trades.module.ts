import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradesRoutingModule } from './trades-routing.module';

import { TradesComponent } from './containers';

@NgModule({
  imports: [CommonModule, TradesRoutingModule],
  declarations: [TradesComponent],
})
export class ChaAngularFeaturesTradesModule {}
