import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function NavBar() {
   return (
      <div className={cx('coverer')}>
         <nav
            className={cx(
               'wrapper',
               'navbar navbar-expand-lg bg-body-tertiary',
            )}
         >
            <div className={cx('container-fluid')}>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="/navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className={cx('navbar-toggler-icon')}></span>
               </button>
               <div
                  className={cx('collapse', 'navbar-collapse')}
                  id="navbarSupportedContent"
               >
                  <ul
                     className={cx('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0')}
                  >
                     <li className={cx('nav-item', 'nav-title')}>
                        <Link to={routesConfig.dogs}>
                           <div className={cx('nav-link', 'nav-title-text')}>
                              Chó
                           </div>
                        </Link>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <Link to={routesConfig.cats}>
                           <div className={cx('nav-link', 'nav-title-text')}>
                              Mèo
                           </div>
                        </Link>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <Link to={routesConfig.equips}>
                           <div className={cx('nav-link', 'nav-title-text')}>
                              Thiết bị thông minh
                           </div>
                        </Link>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <Link to={routesConfig.pagazines}>
                           <div className={cx('nav-link', 'nav-title-text')}>
                              Pagazine chăm sóc boss
                           </div>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
export default NavBar;
