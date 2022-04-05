import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedUiAngularLayoutModule } from '@cha/shared/ui/angular/layout';
import { SharedUiAngularSelectButtonModule } from '@cha/shared/ui/angular/select-button';
import { SharedUiAngularTableModule } from '@cha/shared/ui/angular/table';
import { SharedUiAngularDividerModule } from '@cha/shared/ui/angular/divider';
import { SharedUiAngularCardModule } from '@cha/shared/ui/angular/card';

import { NhlStatsRoutingModule } from './nhl-stats-routing.module';

import { reducer } from './+state/nhl-stats.reducer';
import { NhlStatsEffects } from './+state/nhl-stats.effects';
import { NhlStatsFacade } from './+state/nhl-stats.facade';

import { NhlStatsComponent } from './containers';
import {
  NhlStatsSkaterTableComponent,
  NhlStatsGoalieTableComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    NhlStatsRoutingModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    SharedUiAngularLayoutModule,
    SharedUiAngularSelectButtonModule,
    SharedUiAngularTableModule,
    SharedUiAngularDividerModule,
    SharedUiAngularCardModule,
    StoreModule.forFeature('nhl-stats', reducer),
    EffectsModule.forFeature([NhlStatsEffects]),
  ],
  declarations: [
    NhlStatsComponent,
    NhlStatsSkaterTableComponent,
    NhlStatsGoalieTableComponent,
  ],
  providers: [NhlStatsEffects, NhlStatsFacade],
})
export class ChaAngularFeaturesNhlStatsModule {}
