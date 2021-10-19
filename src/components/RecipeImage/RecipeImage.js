import React from 'react';
import './RecipeImage.css';

export default function RecipeImage(recipe){

    const { img, dishName } = recipe.recipe;

    return(
        <img src={img} alt={dishName}/>
    );
    
};