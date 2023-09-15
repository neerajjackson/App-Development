
import React from 'react';
import './Slideshow.css';

function Slideshow() {
  const images = [
      'https://res.cloudinary.com/dtcdcvkki/image/upload/v1694753377/pexels-pixabay-265906_doftgn.jpg',
    'https://res.cloudinary.com/dtcdcvkki/image/upload/v1694753705/pexels-pixabay-248077_qijccl.jpg',
    'https://res.cloudinary.com/dtcdcvkki/image/upload/v1694753703/pexels-roman-odintsov-7540069_da3wip.jpg',
  ];

  return (
    <div className="slideshow-container">
      {images.map((imageUrl, index) => (
        <div className="slide fade" key={index}>
          <img src={imageUrl} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
