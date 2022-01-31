import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainRulesRoutingModule } from './main-rules-routing.module';

import { MainRulesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MainRulesRoutingModule,
    SharedUiAngularLayoutModule,
    PerfectScrollbarModule,
  ],
  declarations: [MainRulesComponent],
})
export class ChaAngularFeaturesMainRulesModule {}
