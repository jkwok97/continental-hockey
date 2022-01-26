import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCurrentPlayersRoutingModule } from './home-current-players-routing.module';

import { HomeCurrentPlayersComponent } from './containers';

@NgModule({
  imports: [CommonModule, HomeCurrentPlayersRoutingModule],
  declarations: [HomeCurrentPlayersComponent],
})
export class ChaAngularFeaturesHomeCurrentPlayersModule {}
