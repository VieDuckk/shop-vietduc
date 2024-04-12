import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   HomeActiveIcon,
   DogActiveIcon,
   DogIcon,
   CatActiveIcon,
   CatIcon,
   EquipsIcon,
   EquipsActiveIcon,
   PagazinesIcon,
   PagazinesActiveIcon,
} from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem
               title="Trang Chủ"
               to={config.routes.home}
               icon={<HomeIcon />}
               activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
               title="Chó"
               to={config.routes.dogs}
               icon={<DogIcon />}
               activeIcon={<DogActiveIcon />}
            />
            <MenuItem
               title="Mèo"
               to={config.routes.cats}
               icon={<CatIcon />}
               activeIcon={<CatActiveIcon />}
            />
            <MenuItem
               title="Thiết bị thông minh"
               to={config.routes.equips}
               icon={<EquipsIcon />}
               activeIcon={<EquipsActiveIcon />}
            />
            <MenuItem
               title="Pagazines"
               to={config.routes.pagazines}
               icon={<PagazinesIcon />}
               activeIcon={<PagazinesActiveIcon />}
            />
         </Menu>
      </aside>
   );
}

export default Sidebar;
