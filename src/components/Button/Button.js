import React from 'react';
import './Button.css';

export default function Button(randomizeRecipe){
    
    // get randomizeRecipe method from object
    const randomize = randomizeRecipe.randomizeRecipe;
   
    return(
        <button className="recipe-generator" onClick={randomize} >Show New Recipe</button>
    );

}