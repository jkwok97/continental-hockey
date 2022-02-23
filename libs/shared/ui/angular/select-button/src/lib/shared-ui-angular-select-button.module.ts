import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectButtonModule } from 'primeng/selectbutton';

import { SelectButtonComponent } from './containers';

@NgModule({
  imports: [CommonModule, SelectButtonModule],
  declarations: [SelectButtonComponent],
  exports: [SelectButtonComponent],
})
export class SharedUiAngularSelectButtonModule {}
