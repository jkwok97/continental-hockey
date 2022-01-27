import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftCurrentRoutingModule } from './draft-current-routing.module';

import { DraftCurrentComponent } from './containers';

@NgModule({
  imports: [CommonModule, DraftCurrentRoutingModule],
  declarations: [DraftCurrentComponent],
})
export class ChaAngularFeaturesDraftCurrentModule {}
