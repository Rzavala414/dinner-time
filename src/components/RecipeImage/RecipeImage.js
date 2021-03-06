import React from 'react';
import './RecipeImage.css';

export default function RecipeImage(props){
    let img;
    let dishName;

    // displays the picture while viewing the random RecipeComponent if not undefined, else the picture is shown for the recipe component
    if(props.randomRecipe !== undefined){

        img = props.randomRecipe.img;
        dishName = props.randomRecipe.dishName;

    }else if(props.recipes !== undefined){

        const { recipes, foodID } = props;
        const recipe = recipes.find(recipe => recipe.id === parseInt(foodID));
        img = recipe.img;
        dishName = recipe.dishName;

    }
    
    return (
        <div className="img-container">
            <img className="recipe-image" src={img} alt={dishName} />
        </div>
    )
};