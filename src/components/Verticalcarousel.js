import React, { useState, useEffect } from 'react';
import "../components/Verticalcarousel.css";

const VerticalCarousel = ({ items, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageHeight, setImageHeight] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex, interval, items.length]);

    const handleImageLoad = (event) => {
        setImageHeight(event.target.height);
    };

    return (
        <div className="vertical-carousel" style={{ height: imageHeight }}>
            <div
                className="carousel-content"
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={item} onLoad={handleImageLoad} alt='carosel images'/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalCarousel;

