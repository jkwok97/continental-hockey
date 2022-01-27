import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsScorerRoutingModule } from './awards-scorer-routing.module';

import { AwardsScorerComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsScorerRoutingModule],
  declarations: [AwardsScorerComponent],
})
export class ChaAngularFeaturesAwardsScorerModule {}
