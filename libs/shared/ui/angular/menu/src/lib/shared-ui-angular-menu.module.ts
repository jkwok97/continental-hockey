import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [CommonModule, MenubarModule, TabViewModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedUiAngularMenuModule {}
