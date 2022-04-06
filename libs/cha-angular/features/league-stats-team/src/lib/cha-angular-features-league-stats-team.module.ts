import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueStatsTeamRoutingModule } from './league-stats-team-routing.module';

import { LeagueStatsTeamComponent } from './containers';

import {
  LeagueStatsTeamStandingsComponent,
  LeagueStatsTeamPenaltiesComponent,
  LeagueStatsTeamDifferentialsComponent,
  LeagueStatsTeamStreakComponent,
  LeagueStatsTeamPpComponent,
  LeagueStatsTeamPkComponent,
  LeagueStatsTeamTableComponent,
} from './components';

@NgModule({
  imports: [CommonModule, LeagueStatsTeamRoutingModule],
  declarations: [
    LeagueStatsTeamComponent,
    LeagueStatsTeamStandingsComponent,
    LeagueStatsTeamPenaltiesComponent,
    LeagueStatsTeamDifferentialsComponent,
    LeagueStatsTeamStreakComponent,
    LeagueStatsTeamPpComponent,
    LeagueStatsTeamPkComponent,
    LeagueStatsTeamTableComponent,
  ],
})
export class ChaAngularFeaturesLeagueStatsTeamModule {}
