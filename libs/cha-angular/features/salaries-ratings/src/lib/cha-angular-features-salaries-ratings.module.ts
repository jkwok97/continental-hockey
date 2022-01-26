import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalariesRatingsRoutingModule } from './salaries-ratings-routing.module';

import { SalariesRatingsComponent } from './containers';

@NgModule({
  imports: [CommonModule, SalariesRatingsRoutingModule],
  declarations: [SalariesRatingsComponent],
})
export class ChaAngularFeaturesSalariesRatingsModule {}
