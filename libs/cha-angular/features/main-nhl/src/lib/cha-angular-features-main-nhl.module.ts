import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNhlRoutingModule } from './main-nhl-routing.module';

import { MainNhlComponent } from './containers';

@NgModule({
  imports: [CommonModule, MainNhlRoutingModule],
  declarations: [MainNhlComponent],
})
export class ChaAngularFeaturesMainNhlModule {}
