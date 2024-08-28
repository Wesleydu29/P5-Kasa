import React, { useState } from 'react';
import '../styles/CarouselBanner.scss';

function CarouselBanner({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-banner">
            <img src={images[currentIndex]} alt="Apartment view" className="carousel-image" />
            
            {/* affiche les boutons et le compteur uniquement s'il y a plus d'une image */}
            {images.length > 1 && (
                <>
                    <button className="carousel-button prev" onClick={handlePrevClick}>‹</button>
                    <button className="carousel-button next" onClick={handleNextClick}>›</button>
                    <div className="image-counter">
                        {currentIndex + 1} / {images.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default CarouselBanner;
