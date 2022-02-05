import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';

import { AwardsScorerRoutingModule } from './awards-scorer-routing.module';

import { AwardsScorerComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    AwardsScorerRoutingModule,
    SharedUiAngularAwardCardModule,
  ],
  declarations: [AwardsScorerComponent],
})
export class ChaAngularFeaturesAwardsScorerModule {}
