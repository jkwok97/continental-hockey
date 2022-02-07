import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { AwardsRookieRoutingModule } from './awards-rookie-routing.module';

import { AwardsRookieComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,

    AwardsRookieRoutingModule,

    SharedUiAngularAwardCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [AwardsRookieComponent],
})
export class ChaAngularFeaturesAwardsRookieModule {}
