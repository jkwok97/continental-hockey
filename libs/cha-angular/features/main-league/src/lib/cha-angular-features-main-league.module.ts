import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLeagueRoutingModule } from './main-league-routing.module';

import { MainLeagueComponent } from './containers';

@NgModule({
  imports: [CommonModule, RouterModule, MainLeagueRoutingModule],
  declarations: [MainLeagueComponent],
})
export class ChaAngularFeaturesMainLeagueModule {}
