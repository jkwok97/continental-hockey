import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainDraftRoutingModule } from './main-draft-routing.module';

import { MainDraftComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    MainDraftRoutingModule,

    PerfectScrollbarModule,

    SharedUiAngularLayoutModule,
  ],
  declarations: [MainDraftComponent],
})
export class ChaAngularFeaturesMainDraftModule {}
