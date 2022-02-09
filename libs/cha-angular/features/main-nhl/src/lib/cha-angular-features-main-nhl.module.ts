import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainNhlRoutingModule } from './main-nhl-routing.module';

import { MainNhlComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MainNhlRoutingModule,

    PerfectScrollbarModule,

    SharedUiAngularLayoutModule,
  ],
  declarations: [MainNhlComponent],
})
export class ChaAngularFeaturesMainNhlModule {}
