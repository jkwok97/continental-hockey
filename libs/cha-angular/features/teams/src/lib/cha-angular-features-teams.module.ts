import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';

import { TeamsComponent } from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, TeamsRoutingModule, RouterModule],
  declarations: [TeamsComponent],
})
export class ChaAngularFeaturesTeamsModule {}
