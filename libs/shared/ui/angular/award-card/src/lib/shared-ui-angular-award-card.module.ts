import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from 'primeng/avatar';

import { AwardCardComponent } from './containers';

@NgModule({
  imports: [CommonModule, AvatarModule],
  declarations: [AwardCardComponent],
  exports: [AwardCardComponent],
})
export class SharedUiAngularAwardCardModule {}
