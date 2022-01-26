import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueHistoryPlayersRoutingModule } from './league-history-players-routing.module';

import { LeagueHistoryPlayersComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueHistoryPlayersRoutingModule],
  declarations: [LeagueHistoryPlayersComponent],
})
export class ChaAngularFeaturesLeagueHistoryPlayersModule {}
