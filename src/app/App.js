import React from 'react';
import recipes from '../recipes.js';
import Navbar from '../components/Navbar/Navbar.js';
import Button from '../components/Button/Button.js';
import FoodContentContainer from '../components/FoodContentContainer/FoodContentContainer.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={recipes[0].img} alt="temp" />
      <br/>
      <Button />
      <FoodContentContainer recipes={recipes} />
    </div>
  );
}

export default App;
