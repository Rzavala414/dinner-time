import React from 'react';
import recipes from '../recipes.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <img src={recipes[0].image} alt="bahn mi" />
      {recipes[0].nameOfFood}
    </div>
  );
}

export default App;
