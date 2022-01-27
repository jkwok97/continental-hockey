import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsChampionsRoutingModule } from './awards-champions-routing.module';

import { AwardsChampionsComponent } from './containers';

@NgModule({
  imports: [CommonModule, AwardsChampionsRoutingModule],
  declarations: [AwardsChampionsComponent],
})
export class ChaAngularFeaturesAwardsChampionsModule {}
