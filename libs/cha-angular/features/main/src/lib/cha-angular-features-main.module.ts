import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiAngularMenuModule } from '@cha/shared/ui/angular/menu';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularLogoModule } from '@cha/shared/ui/angular/logo';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MainRoutingModule,

    SharedUiAngularMenuModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularLogoModule,
  ],
  declarations: [MainComponent],
})
export class ChaAngularFeaturesMainModule {}
