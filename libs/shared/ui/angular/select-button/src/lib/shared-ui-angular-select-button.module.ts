import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';

import { SelectButtonComponent } from './containers';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SelectButtonModule],
  declarations: [SelectButtonComponent],
  exports: [SelectButtonComponent],
})
export class SharedUiAngularSelectButtonModule {}
