import React from 'react';
import FoodContent from '../FoodContent/FoodContent.js';
import './FoodContentContainer.css';


export default function FoodContentContainer(props){
    const recipe = props.recipe;
    
    return(
        <div className="food-content-container" >
           <FoodContent recipe={recipe} />
        </div>
    );

}

