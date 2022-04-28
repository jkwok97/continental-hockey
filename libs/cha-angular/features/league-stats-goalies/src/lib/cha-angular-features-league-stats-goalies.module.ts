import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProgressBarModule } from 'primeng/progressbar';

import { SharedUiAngularLeaderCardModule } from '@cha/shared/ui/angular/leader-card';
import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { LeagueStatsGoaliesRoutingModule } from './league-state-goalies-routing.module';

import { reducer } from './+state/league-stats-goalies.reducer';
import { LeagueStatsGoaliesEffects } from './+state/league-stats-goalies.effects';
import { LeagueStatsGoaliesFacade } from './+state/league-stats-goalies.facade';

import { LeagueStatsGoaliesComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    LeagueStatsGoaliesRoutingModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularLeaderCardModule,
    ProgressBarModule,
    StoreModule.forFeature('league-stats-goalie', reducer),
    EffectsModule.forFeature([LeagueStatsGoaliesEffects]),
  ],
  declarations: [LeagueStatsGoaliesComponent],
  providers: [LeagueStatsGoaliesEffects, LeagueStatsGoaliesFacade],
})
export class ChaAngularFeaturesLeagueStatsGoaliesModule {}
