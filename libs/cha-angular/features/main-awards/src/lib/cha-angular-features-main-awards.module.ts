import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainAwardsRoutingModule } from './main-awards-routing.module';

import { MainAwardsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,

    ProgressBarModule,
    PerfectScrollbarModule,

    SharedUiAngularLayoutModule,

    MainAwardsRoutingModule,
  ],
  declarations: [MainAwardsComponent],
})
export class ChaAngularFeaturesMainAwardsModule {}
