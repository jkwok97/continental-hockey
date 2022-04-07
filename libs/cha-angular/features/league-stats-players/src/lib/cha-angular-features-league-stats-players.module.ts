import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LeagueStatsPlayersRoutingModule } from './league-state-players-routing.module';

import { reducer } from './+state/league-stats-players.reducer';
import { LeagueStatsPlayersEffects } from './+state/league-stats-players.effects';
import { LeagueStatsPlayersFacade } from './+state/league-stats-players.facade';

import { LeagueStatsPlayersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    LeagueStatsPlayersRoutingModule,
    StoreModule.forFeature('league-stats-player', reducer),
    EffectsModule.forFeature([LeagueStatsPlayersEffects]),
  ],
  declarations: [LeagueStatsPlayersComponent],
  providers: [LeagueStatsPlayersEffects, LeagueStatsPlayersFacade],
})
export class ChaAngularFeaturesLeagueStatsPlayersModule {}
