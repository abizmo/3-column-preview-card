import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ img, title, text }) => (
  <div>
    <img src={img} alt={title} />
    <h1>{title}</h1>
    <p>{text}</p>
    <button type="button">Learn more</button>
  </div>
);

export default Card;
