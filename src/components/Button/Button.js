import React from 'react';
import './Button.css';

export default function Button(props){
    
    // get randomizeRecipe method from object
    const randomizeRecipe = props.randomizeRecipe;
   
    return(
        <button className="recipe-generator" onClick={randomizeRecipe} >Show New Recipe</button>
    );

}