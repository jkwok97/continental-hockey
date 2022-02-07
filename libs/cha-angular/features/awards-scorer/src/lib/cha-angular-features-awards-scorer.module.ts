import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { AwardsScorerRoutingModule } from './awards-scorer-routing.module';

import { AwardsScorerComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,

    AwardsScorerRoutingModule,

    SharedUiAngularAwardCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [AwardsScorerComponent],
})
export class ChaAngularFeaturesAwardsScorerModule {}
