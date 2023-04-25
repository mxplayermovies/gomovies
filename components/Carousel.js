import { useState, useEffect } from 'react';
import Head from 'next/head'

const Carousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex + 1) % images.length
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, interval, images.length]);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
          
    <div className="carousel  relative  justify-center inline-flex items-center rounded-3xl my-5 mx-5  ">
      <div className="carousel-inner ">
        
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${ 
              index === currentImageIndex ? 'active' : ''
            }`}
          >
            <a href={image.href}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '70%', height: '100%', borderRadius: '5%'  }}
               
              />
            </a>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentImageIndex ? 'active' : ''
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
          
      </div>
    </div>
    </div>

  );
};

export default Carousel;
