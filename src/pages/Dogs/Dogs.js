import classNames from 'classnames/bind';
import styles from './Dogs.module.scss';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Dogs() {
   return (
      <div className={cx('products-wrapper')}>
         <p className={cx('title')}>Được boss yêu thích</p>
         <div className={cx('row', 'product-container')}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
         </div>
      </div>
   );
}

export default Dogs;
