import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { AwardsSeasonRoutingModule } from './awards-season-routing.module';

import { AwardsSeasonComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,

    AwardsSeasonRoutingModule,

    SharedUiAngularAwardCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [AwardsSeasonComponent],
})
export class ChaAngularFeaturesAwardsSeasonModule {}
