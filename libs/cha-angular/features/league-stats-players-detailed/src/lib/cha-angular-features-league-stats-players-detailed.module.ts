import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsPlayersDetailedRoutingModule } from './league-stats-players-detailed-routing.module';

import { LeagueStatsPlayersDetailedComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsPlayersDetailedRoutingModule],
  declarations: [LeagueStatsPlayersDetailedComponent],
})
export class ChaAngularFeaturesLeagueStatsPlayersDetailedModule {}
