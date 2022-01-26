import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';

import { GamesComponent } from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, GamesRoutingModule, RouterModule],
  declarations: [GamesComponent],
})
export class ChaAngularFeaturesGamesModule {}
