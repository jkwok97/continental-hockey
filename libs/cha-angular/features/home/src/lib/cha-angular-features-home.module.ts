import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers';

@NgModule({
  imports: [CommonModule, RouterModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class ChaAngularFeaturesHomeModule {}
