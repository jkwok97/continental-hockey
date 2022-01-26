import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFranchiseRoutingModule } from './home-franchise-routing.module';

import { HomeFranchiseComponent } from './containers';

@NgModule({
  imports: [CommonModule, HomeFranchiseRoutingModule],
  declarations: [HomeFranchiseComponent],
})
export class ChaAngularFeaturesHomeFranchiseModule {}
