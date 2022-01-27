import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDraftModule } from './main-draft-routing.module';

import { MainDraftComponent } from './containers';

@NgModule({
  imports: [CommonModule, MainDraftModule],
  declarations: [MainDraftComponent],
})
export class ChaAngularFeaturesMainDraftModule {}
