import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiversRoutingModule } from './waivers-routing.module';

import { WaiversComponent } from './containers';

@NgModule({
  imports: [CommonModule, WaiversRoutingModule],
  declarations: [WaiversComponent],
})
export class ChaAngularFeaturesWaiversModule {}
