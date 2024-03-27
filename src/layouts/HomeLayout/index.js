import Header from '~/layouts/components/Header/Header';
import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('coverer')}>
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default HomeLayout;
