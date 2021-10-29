import { useState } from 'react';
import Button from '../../components/Button/Button.js';
import RecipeImage from '../../components/RecipeImage/RecipeImage.js';
import FoodContentContainer from '../../components/FoodContentContainer/FoodContentContainer.js'


export default function RandomRecipe(props){
  const [randomRecipe, setRandomRecipe] = useState({});
  const recipe = props.recipe;

    // gets random recipe and updates the recipe state
    const randomizeRecipe = () =>{
  
      const randomRecipeIndex = Math.floor(Math.random() * recipe.length); 
      // prevents recipe from showing up twice in a row
      if(randomRecipe === recipe[randomRecipeIndex]){
        randomizeRecipe();
        return;
      };
      
      setRandomRecipe(recipe[randomRecipeIndex])
    }
  
    // display a recipe on load
    window.onload = () => {
      randomizeRecipe();
    }

    return(
        <div>
            <RecipeImage randomRecipe={randomRecipe}/>          
            <br/>
            <Button randomizeRecipe={randomizeRecipe}/>
            <FoodContentContainer randomRecipe={randomRecipe} />
        </div>
    );
}
