import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueHistoryGoaliesRoutingModule } from './league-history-goalies-routing.module';

import { LeagueHistoryGoaliesComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueHistoryGoaliesRoutingModule],
  declarations: [LeagueHistoryGoaliesComponent],
})
export class ChaAngularFeaturesLeagueHistoryGoaliesModule {}
