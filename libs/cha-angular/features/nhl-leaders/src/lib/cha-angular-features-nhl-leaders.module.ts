import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './+state/nhl-leaders.reducer';
import { NhlLeadersEffects } from './+state/nhl-leaders.effects';
import { NhlLeadersFacade } from './+state/nhl-leaders.facade';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';

import { NhlLeadersRoutingModule } from './nhl-leaders-routing.module';

import { NhlLeadersComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    NhlLeadersRoutingModule,
    SharedUiAngularLayoutModule,
    StoreModule.forFeature('nhl-leaders', reducer),
    EffectsModule.forFeature([NhlLeadersEffects]),
  ],
  declarations: [NhlLeadersComponent],
  providers: [NhlLeadersEffects, NhlLeadersFacade],
})
export class ChaAngularFeaturesNhlLeadersModule {}
