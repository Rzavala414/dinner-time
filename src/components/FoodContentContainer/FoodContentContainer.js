import React from 'react';
import FoodContent from '../FoodContent/FoodContent.js';
import './FoodContentContainer.css';


export default function FoodContentContainer(recipe){
   
    return(
        <div className="food-content-container" >
           <FoodContent recipe={recipe} />
        </div>
    );

}

