import {React, useState } from 'react';
import recipes from '../recipes.js';
import Navbar from '../components/Navbar/Navbar.js';
import Button from '../components/Button/Button.js';
import FoodContentContainer from '../components/FoodContentContainer/FoodContentContainer.js'
import './App.css';


function App() {

  const[recipe, setRecipe] = useState({})
  // gets random recipe and updates the recipe state
  const randomizeRecipe = () =>{
    const recipeIndex = Math.floor(Math.random() * recipes.length); 
    setRecipe(recipes[recipeIndex])
    
  }

  // display a recipe on load
  window.onload = () => {
    randomizeRecipe();
  }


  return (
    <div className="App">
      <Navbar />
      <img src={recipe.img} alt="temp" />
      <br/>
      <Button randomizeRecipe={randomizeRecipe}/>
      <FoodContentContainer recipe={recipe} />
    </div>
  );
}

export default App;
