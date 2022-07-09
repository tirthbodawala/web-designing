import RouteHandler from '@pawjs/pawjs/src/router/handler';
import GuestRoutes from '@routes/guest';
import { ErrorPage404 } from '@components/errors/error-404';

export default class Routes {
  apply(routeHandler: RouteHandler) {
    const routes: any[] = [
      ...GuestRoutes,
    ];

    routeHandler.set404Component(ErrorPage404);

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      // Perform any async action before adding routes to the application
      routeHandler.addRoutes(routes);
    });
  }
}
