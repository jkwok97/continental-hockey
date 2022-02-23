import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularSelectButtonModule } from '@cha/shared/ui/angular/select-button';

import { NhlStatsRoutingModule } from './nhl-stats-routing.module';

import { reducer } from './+state/nhl-stats.reducer';
import { NhlStatsEffects } from './+state/nhl-stats.effects';
import { NhlStatsFacade } from './+state/nhl-stats.facade';

import { NhlStatsComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    NhlStatsRoutingModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularSelectButtonModule,
    StoreModule.forFeature('nhl-stats', reducer),
    EffectsModule.forFeature([NhlStatsEffects]),
  ],
  declarations: [NhlStatsComponent],
  providers: [NhlStatsEffects, NhlStatsFacade],
})
export class ChaAngularFeaturesNhlStatsModule {}
