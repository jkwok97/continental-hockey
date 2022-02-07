import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { AwardsDefenseRoutingModule } from './awards-defense-routing.module';

import { AwardsDefenseComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,

    AwardsDefenseRoutingModule,
    SharedUiAngularAwardCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [AwardsDefenseComponent],
})
export class ChaAngularFeaturesAwardsDefenseModule {}
