// src/Card.js
import React from 'react';
import './Card.css';

export const Card = ({ hamburgesa, descripcion, precio, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={hamburgesa} className="card-image" />}
      <h2>{hamburgesa}</h2>
      <h3>{descripcion}</h3>
      <p>{precio}</p>
      <button>AGREGAR AL CARRITO</button>
    </div>

    
  );
};

export default Card;
