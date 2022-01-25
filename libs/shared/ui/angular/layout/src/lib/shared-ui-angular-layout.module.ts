import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LayoutFeatureComponent } from './components/layout-feature/layout-feature.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutComponent, LayoutFeatureComponent],
  exports: [LayoutComponent, LayoutFeatureComponent],
})
export class SharedUiAngularLayoutModule {}
