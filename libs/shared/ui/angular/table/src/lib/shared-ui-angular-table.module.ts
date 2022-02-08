import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { TableComponent } from './containers';

@NgModule({
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class SharedUiAngularTableModule {}
