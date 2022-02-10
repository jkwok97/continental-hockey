import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { NhlTwitterRoutingModule } from './nhl-twitter-routing.module';

import { NhlTwitterComponent } from './containers';

@NgModule({
  imports: [CommonModule, NhlTwitterRoutingModule, SharedUiAngularLayoutModule],
  declarations: [NhlTwitterComponent],
})
export class ChaAngularFeaturesNhlTwitterModule {}
