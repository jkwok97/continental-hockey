import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerModule } from 'primeng/divider';

import { DividerComponent } from './containers';

@NgModule({
  imports: [CommonModule, DividerModule],
  declarations: [DividerComponent],
  exports: [DividerComponent],
})
export class SharedUiAngularDividerModule {}
