import React from 'react';
import './FoodContent.css';

// hold the information that relates to reach recipe
export default function FoodContent(props){
    let dishName;
    let directions;
    let ingredients;
    let servings
    // displays the recipe info while viewing the random RecipeComponent if not undefined, else the food info is shown for the recipe component
    if(props.randomRecipe !== undefined){
        dishName = props.randomRecipe.dishName;
        directions = props.randomRecipe.directions;
        servings = props.randomRecipe.servings
        // returns an array of list items for each ingredient
        if(props.randomRecipe.ingredients !== undefined) {
            ingredients = props.randomRecipe.ingredients.split('" "').map((ingredient, id) => <li key={id}>{ingredient}</li>);
        }

    }else if(props.recipes !== undefined){
        const { recipes, foodID } = props;
        const recipe = recipes.find(recipe => recipe.id === parseInt(foodID));
        dishName = recipe.dishName;
        directions = recipe.directions;
        servings = recipe.servings;
        // returns an array of list items for each ingredient
        ingredients = recipe.ingredients.split('" "').map((ingredient, id) => <li key={id}>{ingredient}</li>);
    }
    
    return(
        <div className="food-content">
            <h2>{dishName}</h2> 
            <div>Servings: {servings}</div>
           
            <h3><u>INGREDIENTS</u></h3>
            <ul>
                {ingredients}
            </ul>

            <h3><u>DIRECTIONS</u></h3>
            <ol>
                <li>{directions}</li>
            </ol>
        </div>
    );
}