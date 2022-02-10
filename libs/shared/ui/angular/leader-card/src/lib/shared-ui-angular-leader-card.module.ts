import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from 'primeng/avatar';

import { LeaderCardComponent } from './containers';

@NgModule({
  imports: [CommonModule, AvatarModule],
  declarations: [LeaderCardComponent],
  exports: [LeaderCardComponent],
})
export class SharedUiAngularLeaderCardModule {}
