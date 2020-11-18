import React from 'react';
import './CardSkill.css';
function CardSkill({ name, image, handleClick, movie }) {
  return (
    <div className="cardSkill">
      <div className="cardSkill__image">
        <img
          src={image}
          alt="skill"
          className="cardSkill__img"
          onClick={() => handleClick(movie)}
        />
      </div>
      <h1 className="cardSkill__name">{name}</h1>
    </div>
  );
}

export default CardSkill;
