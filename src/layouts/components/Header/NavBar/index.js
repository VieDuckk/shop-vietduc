import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './NavBar.module.scss';

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
                        <a
                           className={cx('nav-link', 'nav-title-text')}
                           href="/"
                        >
                           Chó
                        </a>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <a
                           className={cx('nav-link', 'nav-title-text')}
                           href="/"
                        >
                           Mèo
                        </a>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <a
                           className={cx('nav-link', 'nav-title-text')}
                           href="/"
                        >
                           Thiết bị thông minh
                        </a>
                     </li>
                     <li className={cx('nav-item', 'nav-title')}>
                        <a
                           className={cx('nav-link', 'nav-title-text')}
                           href="/"
                        >
                           Pagazine chăm sóc boss
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}
export default NavBar;
