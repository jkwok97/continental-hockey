import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesAllRoutingModule } from './games-all-routing.module';

import { GamesAllComponent } from './containers';

@NgModule({
  imports: [CommonModule, GamesAllRoutingModule],
  declarations: [GamesAllComponent],
})
export class ChaAngularFeaturesGamesAllModule {}
