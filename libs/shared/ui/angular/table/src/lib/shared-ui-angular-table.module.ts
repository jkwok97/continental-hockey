import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { TableComponent, LazyLoadTableComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    MultiSelectModule,
    DropdownModule,
  ],
  declarations: [TableComponent, LazyLoadTableComponent],
  exports: [TableComponent, LazyLoadTableComponent],
})
export class SharedUiAngularTableModule {}
