import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { AwardsGmRoutingModule } from './awards-gm-routing.module';

import { AwardsGmComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,

    AwardsGmRoutingModule,

    SharedUiAngularAwardCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [AwardsGmComponent],
})
export class ChaAngularFeaturesAwardsGmModule {}
