import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { RulesEgrRoutingModule } from './rules-egr-routing.module';

import { RulesEgrComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RulesEgrRoutingModule,
    SharedUiAngularCardModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [RulesEgrComponent],
})
export class ChaAngularFeaturesRulesEgrModule {}
