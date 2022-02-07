import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

import { AwardCardComponent } from './containers';

@NgModule({
  imports: [CommonModule, AvatarModule, DividerModule],
  declarations: [AwardCardComponent],
  exports: [AwardCardComponent],
})
export class SharedUiAngularAwardCardModule {}
