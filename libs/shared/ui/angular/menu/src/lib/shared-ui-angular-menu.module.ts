import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [CommonModule, MenubarModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedUiAngularMenuModule {}
