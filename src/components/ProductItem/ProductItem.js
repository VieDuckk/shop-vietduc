import { banners } from '~/assets/images';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function ProductItem() {
   return (
      <div className={cx('col-sm-6', 'col-lg-4', 'col-xl-3')}>
         <div className={cx('card', 'product-item')}>
            <Image
               src={banners.dog}
               alt="banner"
               className={cx('card-img-top', 'product-img')}
            ></Image>
            <div className={cx('card-body')}>
               <h5 className={cx('card-title')}>Card title</h5>
               <p className={cx('card-text')}>
                  Some quick example text to build on the card title and make up
                  the bulk of t content.
               </p>
               <a href="/" className={cx('btn btn-primary')}>
                  Go somewhere
               </a>
            </div>
         </div>
      </div>
   );
}

export default ProductItem;
