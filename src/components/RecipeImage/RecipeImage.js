import React from 'react';
import './RecipeImage.css';

export default function RecipeImage(props){
    let img;
    let dishName;

    if(props.randomRecipe !== undefined){

        img = props.randomRecipe.img;
        dishName = props.randomRecipe.dishName;

    }else if(props.recipes !== undefined){

        const { recipes, foodID } = props;
        const recipe = recipes.find(recipe => recipe.id == foodID);
        img = recipe.img;
        dishName = recipe.dishName;

    }
    
    return <img className="recipe-image" src={img} alt={dishName} />;
};