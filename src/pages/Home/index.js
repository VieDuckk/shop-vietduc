import SliderComponent from '~/components/SliderComponent';
import { sliders, banners } from '~/assets/images';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx('coverer')}>
         <SliderComponent arrImages={sliders} />
         <div className={cx('banner-wrapper')}>
            <p className={cx('title')}>Mua sắm theo giống thú cưng</p>
            <div className={cx('row', 'banner-container')}>
               <div className={cx('col-sm-6', 'mb-3', 'mb-sm-0')}>
                  <div className={cx('card')}>
                     <a href="/" className={cx('card-body')}>
                        <Image
                           src={banners.dog}
                           alt="banner"
                           className={cx('banner-img')}
                        ></Image>
                     </a>
                  </div>
               </div>
               <div className={cx('col-sm-6')}>
                  <div className={cx('card')}>
                     <a href="/" className={cx('card-body')}>
                        <Image
                           src={banners.cat}
                           alt="banner"
                           className={cx('banner-img')}
                        ></Image>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className={cx('products-wrapper')}>
            <p className={cx('title')}>Được boss yêu thích</p>
            <div className={cx('row', 'product-container')}>
               <ProductItem />
               <ProductItem />
               <ProductItem />
               <ProductItem />
            </div>
         </div>
      </div>
   );
}

export default Home;
