// components/Carousel.js
'use client'
import { useState } from 'react';
import { GrFormNext,GrFormPrevious  } from "react-icons/gr";
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 6 + items.length) % items.length);
  };

  const renderCarouselItems = () => {
    return items.slice(currentIndex, currentIndex + 6).map((item, index) => (
        <div key={index} className="w-full p-3 sm:w-1/6">
            <div className="shadow-2xl p-3">
        <img src={item.img} alt={`Slide ${index}`} className="w-full h-auto py-5" style={{borderRadius:"100%"}} />
            <p className="mt-2 text-center">{item.content}</p>
            <p className="mt-2 text-center">{item.price}$</p>
            </div>
      </div>
    ));
  };

  return (
    <div className="carousel">
      <button className="prevButton" onClick={prevSlide}>
        <GrFormPrevious />
      </button>
      <div className={`slide flex flex-wrap justify-center`}>
        {renderCarouselItems()}
      </div>
      <button className="nextButton" onClick={nextSlide}>
        <GrFormNext />
      </button>
    </div>
  );
};

export default Carousel;
