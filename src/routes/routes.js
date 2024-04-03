import config from '~/config';
//layout
import { HeaderOnly, HomeLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Dogs from '~/pages/Dogs';
import Pagazines from '~/pages/Pagazines';
import Equips from '~/pages/Equips';
import Profile from '~/pages/Profile';
import Cats from '~/pages/Cats';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
   { path: config.routes.home, component: Home, layout: HomeLayout },
   { path: config.routes.dogs, component: Dogs },
   { path: config.routes.equips, component: Equips },
   { path: config.routes.pagazines, component: Pagazines },
   { path: config.routes.profile, component: Profile, layout: HeaderOnly },
   { path: config.routes.cats, component: Cats },
   { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
