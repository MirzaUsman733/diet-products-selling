// components/Carousel.js
'use client'
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const renderCarouselItems = () => {
        const slicedItems = items?.slice(currentIndex, currentIndex + itemsPerPage) || [];
        const remainingItems = items?.slice(0, itemsPerPage - slicedItems.length) || [];

        return [...slicedItems, ...remainingItems].map((item, index) => (
            <div key={index} className="w-full p-3 sm:w-1/3">
                <div className="shadow-2xl p-3">
                    <img src={item.img} alt={`Slide ${index}`} className="w-full h-auto py-5" style={{ borderRadius: "100%" }} />
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
