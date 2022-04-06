import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';
import { SharedUiAngularDividerModule } from '@cha/shared/ui/angular/divider';

import { LeagueStatsTeamRoutingModule } from './league-stats-team-routing.module';

import { reducer } from './+state/league-stats-team.reducer';
import { LeagueStatsTeamEffects } from './+state/league-stats-team.effects';
import { LeagueStatsTeamFacade } from './+state/league-stats-team.facade';

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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    LeagueStatsTeamRoutingModule,
    ProgressBarModule,
    AccordionModule,
    TableModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularCardModule,
    SharedUiAngularDividerModule,

    StoreModule.forFeature('league-stats-team', reducer),
    EffectsModule.forFeature([LeagueStatsTeamEffects]),
  ],
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
  providers: [LeagueStatsTeamEffects, LeagueStatsTeamFacade],
})
export class ChaAngularFeaturesLeagueStatsTeamModule {}
