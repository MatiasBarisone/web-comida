// src/App.js
import React from 'react';
import Header from './Header';
import Card from './Card';
import './Card.css'; // Importar los estilos CSS
import PDF from './data/PDF.js'; // Importa los datos
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <h1>""</h1>
      <div className="cards-container">  
        {PDF.map(item => (
          <Card
            key={item.id}
            nombrePdf={item.nombrePdf}
            descripcion={item.descripcion}
            precio={item.precio}
            image={item.image}
            whatsappNumber="21321312"
          />))}
      </div>
      
    </div>
  );
}

export default App;
