import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesUpcomingRoutingModule } from './games-upcoming-routing.module';

import { GamesUpcomingComponent } from './containers';

@NgModule({
  imports: [CommonModule, GamesUpcomingRoutingModule],
  declarations: [GamesUpcomingComponent],
})
export class ChaAngularFeaturesGamesUpcomingModule {}
