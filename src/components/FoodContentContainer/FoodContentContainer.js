import React from 'react';
import FoodContent from '../FoodContent/FoodContent.js';
import './FoodContentContainer.css';

export default function FoodContentContainer(recipes){
    console.log(recipes.recipes)
    return(
        <div className="food-content-container" >
            <FoodContent recipes={recipes}/>
        </div>
    );

}