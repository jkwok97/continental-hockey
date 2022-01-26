import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesPlayoffsRoutingModule } from './games-playoffs-routing.module';

import { GamesPlayoffsComponent } from './containers';

@NgModule({
  imports: [CommonModule, GamesPlayoffsRoutingModule],
  declarations: [GamesPlayoffsComponent],
})
export class ChaAngularFeaturesGamesPlayoffsModule {}
