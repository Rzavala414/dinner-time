import React from 'react';
import FoodContent from '../FoodContent/FoodContent.js';
import './FoodContentContainer.css';


export default function FoodContentContainer(props){
    const { randomRecipe, recipes, foodID } = props;
    
    return(
        <div className="food-content-container" >
           <FoodContent randomRecipe={randomRecipe} recipes={recipes} foodID={foodID}/>
        </div>
    );

}

