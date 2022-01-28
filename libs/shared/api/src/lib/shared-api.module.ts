import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DisplayService, TeamInfoService } from './services';

@NgModule({
  imports: [HttpClientModule],
  providers: [TeamInfoService, DisplayService],
})
export class SharedApiModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SharedApiModule
  ) {
    if (parentModule) {
      throw new Error(
        'SharedApiModule is already loaded. Import only in AppModule'
      );
    }
  }
}
