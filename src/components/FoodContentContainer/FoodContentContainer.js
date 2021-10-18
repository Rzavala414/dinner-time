import React from 'react';
import FoodContent from '../FoodContent/FoodContent.js';
import './FoodContentContainer.css';

export default function FoodContentContainer(recipes){
    // console.log(recipes.recipes)
    const recipesArray = recipes.recipes;
    const recipe = recipesArray.map(recipe => <FoodContent key={recipe.id} recipe={recipe} />);
    
    return(
        <div className="food-content-container" >
           
        </div>
    );

}

