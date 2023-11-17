import React, { useState } from 'react';
import CalculadoraDeSoma from './components/soma';
import CalculadoraDeSubtracao from './components/subtracao';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1> Calculadora de Adição </h1>
      <CalculadoraDeSoma />
      <br></br>
      <h1> Calculadora de Subtração </h1>
      <CalculadoraDeSubtracao />
    </div>
  );
}

export default App;
