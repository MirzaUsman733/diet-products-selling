// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span role="img" aria-label="Previous" style={{ fontSize: '24px' }}>
          &#x2190;
        </span>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span role="img" aria-label="Next" style={{ fontSize: '24px' }}>
          &#x2192;
        </span>
      </div>
    );
  };

  return (
    <div className="m-auto">
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 1"
            style={{ width: '95vw', height: '70vh', margin: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 2"
            style={{ width: '95vw', height: '70vh', margin: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Slide 3"
            style={{ width: '95vw', height: '70vh', margin: 'auto' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
