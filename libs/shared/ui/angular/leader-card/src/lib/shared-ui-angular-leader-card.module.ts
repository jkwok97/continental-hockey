import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from 'primeng/avatar';

import { NhlLeaderCardComponent, ChaLeaderCardComponent } from './containers';

@NgModule({
  imports: [CommonModule, AvatarModule],
  declarations: [NhlLeaderCardComponent, ChaLeaderCardComponent],
  exports: [NhlLeaderCardComponent, ChaLeaderCardComponent],
})
export class SharedUiAngularLeaderCardModule {}
