import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueHistoryTeamsRoutingModule } from './league-history-teams-routing.module';

import { LeagueHistoryTeamsComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueHistoryTeamsRoutingModule],
  declarations: [LeagueHistoryTeamsComponent],
})
export class ChaAngularFeaturesLeagueHistoryTeamsModule {}
