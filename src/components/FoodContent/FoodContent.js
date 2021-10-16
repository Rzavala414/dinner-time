import React from 'react';
import './FoodContent.css';

export default function FoodContent(recipes){
    // console.log(recipes.recipes.recipes)
    
    // set recipes object to on single recipe array
    const recipe = recipes.recipes.recipes;

    // grab recipe information 
    const {dishName, ingredients} = recipe[0];

    return(
        <div className="food-content">
           <h2>{dishName}</h2>
            <ul>
                <li>{ingredients}</li>
            </ul>
        </div>
    );
}