import { useState } from 'react';
import recipes from '../../recipes.js';
import Button from '../../components/Button/Button.js';
import RecipeImage from '../../components/RecipeImage/RecipeImage.js';
import FoodContentContainer from '../../components/FoodContentContainer/FoodContentContainer.js'


export default function RandomRecipe(){
    const[recipe, setRecipe] = useState({})

    // gets random recipe and updates the recipe state
    const randomizeRecipe = () =>{
  
      const recipeIndex = Math.floor(Math.random() * recipes.length); 
  
      // prevents recipe from showing up twice in a row
      if(recipe === recipes[recipeIndex]){
        randomizeRecipe();
        return;
      };
  
      setRecipe(recipes[recipeIndex])
    }
  
    // display a recipe on load
    window.onload = () => {
      randomizeRecipe();
    }

    return(
        <div>
            <RecipeImage recipe={recipe}/>          
            <br/>
            <Button randomizeRecipe={randomizeRecipe}/>
            <FoodContentContainer recipe={recipe} />
        </div>
    );
}
