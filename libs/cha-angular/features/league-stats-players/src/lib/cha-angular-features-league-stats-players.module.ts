import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularLeaderCardModule } from '@cha/shared/ui/angular/leader-card';

import { LeagueStatsPlayersRoutingModule } from './league-state-players-routing.module';

import { reducer } from './+state/league-stats-players.reducer';
import { LeagueStatsPlayersEffects } from './+state/league-stats-players.effects';
import { LeagueStatsPlayersFacade } from './+state/league-stats-players.facade';

import { LeagueStatsPlayersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    LeagueStatsPlayersRoutingModule,
    ProgressBarModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularLeaderCardModule,
    StoreModule.forFeature('league-stats-player', reducer),
    EffectsModule.forFeature([LeagueStatsPlayersEffects]),
  ],
  declarations: [LeagueStatsPlayersComponent],
  providers: [LeagueStatsPlayersEffects, LeagueStatsPlayersFacade],
})
export class ChaAngularFeaturesLeagueStatsPlayersModule {}
