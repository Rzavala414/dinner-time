import React from 'react';
import './FoodContent.css';

export default function FoodContent(recipe, key){
    // sets recipes object to a single recipe array
    const {dishName, directions, ingredients} = recipe.recipe;

    // grab recipe information 
    // const {dishName, ingredients} = recipe[0];

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
                <li>Butter</li>
                <li>Water</li>
                <li>Flour</li>
                <li>Love</li>
            </ol>
        </div>
    );
}