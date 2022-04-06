import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { MainLeagueRoutingModule } from './main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainLeagueRoutingModule,
    PerfectScrollbarModule,
    SharedUiAngularLayoutModule,
  ],
  declarations: [MainLeagueComponent],
})
export class ChaAngularFeaturesMainLeagueModule {}
