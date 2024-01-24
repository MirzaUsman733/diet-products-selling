'use client'
import React, { useRef, useState, useEffect } from "react";

const CarouselGithub = ({ images }) => {
    // Using useRef for the array of image references
    const refs = useRef(images.map(() => React.createRef()));

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // Scroll to the current image when the component mounts
        scrollToImage(currentImage);
    }, [currentImage]);

    const scrollToImage = (i) => {
        setCurrentImage(i);
        refs.current[i].current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };

    const totalImages = images.length;

    const nextImage = () => {
        scrollToImage((currentImage + 1) % totalImages);
    };

    const previousImage = () => {
        scrollToImage((currentImage - 1 + totalImages) % totalImages);
    };

    const arrowStyle =
        "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

    const sliderControl = (isLeft) => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
            style={{ top: "40%" }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
                {isLeft ? "◀" : "▶"}
            </span>
        </button>
    );

    return (
        <div className="w-screen flex justify-center">
            <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
                <div className="relative w-full">
                    <div className="carouselGitHub">
                        {sliderControl(true)}
                        {images?.map((img, i) => (
                            <div className="w-full flex-shrink-0" key={img} ref={refs.current[i]}>
                                <img src={img} alt={`carousel-img-${i}`} className="w-full object-contain" />
                            </div>
                        ))}
                        {sliderControl()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselGithub;
