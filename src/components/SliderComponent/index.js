import React from 'react';
import Slider from 'react-slick';
import Image from '../Image';
import classNames from 'classnames/bind';
import styles from './SliderComponent.module.scss';

const cx = classNames.bind(styles);

function SliderComponent({ arrImages }) {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
   };
   return (
      <div>
         <Slider {...settings}>
            {arrImages.map((image, index) => {
               return (
                  <Image
                     key={index}
                     src={image}
                     alt="slider"
                     className={cx('slider-img')}
                  />
               );
            })}
         </Slider>
      </div>
   );
}
export default SliderComponent;
