import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesCurrentRoutingModule } from './games-current-routing.module';

import { GamesCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, GamesCurrentRoutingModule],
  declarations: [GamesCurrentComponent],
})
export class ChaAngularFeaturesGamesCurrentModule {}
