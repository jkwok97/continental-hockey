import { SharedRouterModule } from './lib//shared-router.module';

import { RouterFacade } from './lib/+state/router.facade';

import { AppRoute } from './lib/+state/router.interfaces';

import { routerActions } from './lib/+state/router.actions';

export { RouterFacade, SharedRouterModule, AppRoute, routerActions };
