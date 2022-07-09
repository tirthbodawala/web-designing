import { IRoute } from '@pawjs/pawjs';

const GuestRoutes: IRoute[] = [
  {
    path: '/',
    component: () => import('@pages/home'),
  },
];

export default GuestRoutes;
