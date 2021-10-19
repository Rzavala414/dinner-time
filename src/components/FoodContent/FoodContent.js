import React from 'react';
import './FoodContent.css';

// hold the information that relates to reach recipe
export default function FoodContent(recipe){

    // Grab recipe items
    const {dishName, directions, ingredients} = recipe.recipe.recipe;
    
    return(
        <div className="food-content">
            <h2>{dishName}</h2>
           
            <h3><u>INGREDIENTS</u></h3>
            <ul>
                <li>{ingredients}</li>
                <li>Water</li>
                <li>Flour</li>
                <li>Love</li>
            </ul>

            <h3><u>DIRECTIONS</u></h3>
            <ol>
                <li>{directions}</li>
                <li>Water</li>
                <li>Flour</li>
                <li>Love</li>
            </ol>
        </div>
    );
}