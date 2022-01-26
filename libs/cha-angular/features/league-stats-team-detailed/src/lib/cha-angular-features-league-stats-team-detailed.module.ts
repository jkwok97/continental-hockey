import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsTeamDetailedRoutingModule } from './league-stats-team-detailed-routing.module';

import { LeagueStatsTeamDetailedComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsTeamDetailedRoutingModule],
  declarations: [LeagueStatsTeamDetailedComponent],
})
export class ChaAngularFeaturesLeagueStatsTeamDetailedModule {}
