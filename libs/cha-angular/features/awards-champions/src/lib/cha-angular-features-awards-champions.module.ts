import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularAwardCardModule } from '@cha/shared/ui/angular/award-card';

import { AwardsChampionsRoutingModule } from './awards-champions-routing.module';

import { AwardsChampionsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    AwardsChampionsRoutingModule,
    SharedUiAngularAwardCardModule,
  ],
  declarations: [AwardsChampionsComponent],
})
export class ChaAngularFeaturesAwardsChampionsModule {}
