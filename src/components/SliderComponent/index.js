import React from 'react';
import Slider from 'react-slick';
import Image from '../Image';
import './SliderComponent.module.scss';

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
            {arrImages.map((image) => {
               return <Image src={image} alt="slider" className="slider-img" />;
            })}
         </Slider>
      </div>
   );
}
export default SliderComponent;
