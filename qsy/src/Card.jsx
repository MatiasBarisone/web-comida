import './Card.css';

export const Card = ({hamburgesa, image, precio, descripcion}) => {
  return (
    <div className="card">
      {image && <img src={image} alt={hamburgesa} className="card-image" />}
      <h2>{hamburgesa}</h2>
      <h3>{descripcion}</h3>
      <p>{precio}</p>
      
    </div>

    
  );
};

export default Card;
