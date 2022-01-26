import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueHistoryRoutingModule } from './league-history-routing.module';

import { LeagueHistoryComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueHistoryRoutingModule],
  declarations: [LeagueHistoryComponent],
})
export class ChaAngularFeaturesLeagueHistoryModule {}
