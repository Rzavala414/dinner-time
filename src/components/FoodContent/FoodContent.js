import React from 'react';
import './FoodContent.css';

// hold the information that relates to reach recipe
export default function FoodContent(props){
    let dishName;
    let directions;
    let ingredients;

    // displays the recipe info while viewing the random RecipeComponent if not undefined, else the food info is shown for the recipe component
    if(props.randomRecipe !== undefined){

        dishName = props.randomRecipe.dishName;
        directions = props.randomRecipe.directions;
        ingredients = props.randomRecipe.ingredients;

    }else if(props.recipes !== undefined){

        const { recipes, foodID } = props;
        const recipe = recipes.find(recipe => recipe.id === parseInt(foodID));
        dishName = recipe.dishName;
        directions = recipe.directions;
        ingredients = recipe.ingredients;

    }

    
    
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