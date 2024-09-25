import './Card.css';

export const Card = ({nombrePdf, image, precio, descripcion, whatsappNumber }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={nombrePdf} className="card-image" />}
      <h2>{nombrePdf}</h2>
      <h3>{descripcion}</h3>
      <p>{precio}</p>
      <a 
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola, estoy interesado en ${nombrePdf}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
        >Contactar por WhatsApp</a>
    </div>

    
  );
};

export default Card;
