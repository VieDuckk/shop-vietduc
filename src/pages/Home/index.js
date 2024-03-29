import SliderComponent from '~/components/SliderComponent';
import { sliders, banners } from '~/assets/images';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

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
               <div className={cx('col-sm-6', 'col-lg-4', 'col-xl-3')}>
                  <div className={cx('card', 'product-item')}>
                     <Image
                        src={banners.dog}
                        alt="banner"
                        className={cx('card-img-top')}
                     ></Image>
                     <div className={cx('card-body')}>
                        <h5 className={cx('card-title')}>Card title</h5>
                        <p className={cx('card-text')}>
                           Some quick example text to build on the card title
                           and make up the bulk of t content.
                        </p>
                        <a href="/" className={cx('btn btn-primary')}>
                           Go somewhere
                        </a>
                     </div>
                  </div>
               </div>
               <div className={cx('col-sm-6', 'col-lg-4', 'col-xl-3')}>
                  <div className={cx('card', 'product-item')}>
                     <Image
                        src={banners.dog}
                        alt="banner"
                        className={cx('card-img-top')}
                     ></Image>
                     <div className={cx('card-body')}>
                        <h5 className={cx('card-title')}>Card title</h5>
                        <p className={cx('card-text')}>
                           Some quick example text to build on the card title
                           and make up the bulk of t content.
                        </p>
                        <a href="/" className={cx('btn btn-primary')}>
                           Go somewhere
                        </a>
                     </div>
                  </div>
               </div>
               <div className={cx('col-sm-6', 'col-lg-4', 'col-xl-3')}>
                  <div className={cx('card', 'product-item')}>
                     <Image
                        src={banners.dog}
                        alt="banner"
                        className={cx('card-img-top')}
                     ></Image>
                     <div className={cx('card-body')}>
                        <h5 className={cx('card-title')}>Card title</h5>
                        <p className={cx('card-text')}>
                           Some quick example text to build on the card title
                           and make up the bulk of t content.
                        </p>
                        <a href="/" className={cx('btn btn-primary')}>
                           Go somewhere
                        </a>
                     </div>
                  </div>
               </div>
               <div className={cx('col-sm-6', 'col-lg-4', 'col-xl-3')}>
                  <div className={cx('card', 'product-item')}>
                     <Image
                        src={banners.dog}
                        alt="banner"
                        className={cx('card-img-top')}
                     ></Image>
                     <div className={cx('card-body')}>
                        <h5 className={cx('card-title')}>Card title</h5>
                        <p className={cx('card-text')}>
                           Some quick example text to build on the card title
                           and make up the bulk of t content.
                        </p>
                        <a href="/" className={cx('btn btn-primary')}>
                           Go somewhere
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
