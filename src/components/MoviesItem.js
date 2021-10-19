import React from 'react';
import noImage from '../notFound/no-image-available.png';
import '../styles/MoviesItem.css';

const MoviesItem = ({ image, title, year}) => {
  return (
    <div className='card'>
      {image === 'N/A' ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default MoviesItem;