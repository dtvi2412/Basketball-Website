import React from 'react';

import './Card.css';

function Card({ key, name, image, movie, handleClick }) {
  return (
    <div className="card">
      {image ? (
        <div className="card__image">
          <img
            src={image}
            alt=""
            className="card__img"
            onClick={() => handleClick(movie)}
          />
        </div>
      ) : (
        'LOADING'
      )}

      <h1 className="card__name">{name}</h1>
    </div>
  );
}

export default Card;
