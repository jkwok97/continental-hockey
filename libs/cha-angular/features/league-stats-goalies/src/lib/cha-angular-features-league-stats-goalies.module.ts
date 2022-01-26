import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsGoaliesRoutingModule } from './league-state-goalies-routing.module';

import { LeagueStatsGoaliesComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsGoaliesRoutingModule],
  declarations: [LeagueStatsGoaliesComponent],
})
export class ChaAngularFeaturesLeagueStatsGoaliesModule {}
