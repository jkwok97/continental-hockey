import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeagueStateRoutingModule } from './league-stats-routing.module';

import { LeagueStatsComponent } from './containers';

@NgModule({
  imports: [CommonModule, RouterModule, LeagueStateRoutingModule],
  declarations: [LeagueStatsComponent],
})
export class ChaAngularFeaturesLeagueStatsModule {}
