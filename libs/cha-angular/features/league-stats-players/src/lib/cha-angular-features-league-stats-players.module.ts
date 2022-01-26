import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsPlayersRoutingModule } from './league-state-players-routing.module';

import { LeagueStatsPlayersComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsPlayersRoutingModule],
  declarations: [LeagueStatsPlayersComponent],
})
export class ChaAngularFeaturesLeagueStatsPlayersModule {}
