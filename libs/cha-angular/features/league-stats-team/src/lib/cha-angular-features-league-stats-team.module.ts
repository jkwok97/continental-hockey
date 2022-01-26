import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsTeamRoutingModule } from './league-stats-team-routing.module';

import { LeagueStatsTeamComponent } from './containers';

@NgModule({
  imports: [CommonModule, LeagueStatsTeamRoutingModule],
  declarations: [LeagueStatsTeamComponent],
})
export class ChaAngularFeaturesLeagueStatsTeamModule {}
