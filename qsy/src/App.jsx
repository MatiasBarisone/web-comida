// src/App.js
import React from 'react';
import Header from './Header';
import Card from './Card';
import './Card.css'; // Importar los estilos CSS
import hamburgers from './data/Hambur'; // Importa los datos
import Pizza from './data/Pizza'; // Import
import './App.css';
import empanadas from './data/Empanadas';



function App() {
  return (
    <div className="App">
      <Header />

      <h1 className='tittle-hambur'>Hamburguesas</h1>
      <div className="cards-container">  
        {hamburgers.map(item => (
          <Card
            key={item.id}
            hamburgesa={item.hamburgesa}
            descripcion={item.descripcion}
            precio={item.precio}
            image={item.image}
          />))}
      </div>
      <h1 className='tittle-hambur'>Pizzas</h1>
      <div className="cards-container">
      {Pizza.map(item => (
          <Card
            key={item.id}
            pizza={item.pizza}
            descripcion={item.descripcion}
            precio={item.precio}
            image={item.image}
          />))}
</div>
<h1 className='tittle-hambur'>
  Empanadas</h1>
<div className="cards-container">
      {empanadas.map(item => (
          <Card
            key={item.id}
            empanadas={item.empanadas}
            descripcion={item.descripcion}
            precio={item.precio}
            image={item.image}
          />))}
</div>
<div>

</div>
    </div>
  );
}

export default App;
