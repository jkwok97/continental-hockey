import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsGoaliesDetailedRoutingModule } from './league-stats-goalies-detailed-routing.module';

import { LeagueStatsGoaliesDetailedComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsGoaliesDetailedRoutingModule],
  declarations: [LeagueStatsGoaliesDetailedComponent],
})
export class ChaAngularFeaturesLeagueStatsGoaliesDetailedModule {}
