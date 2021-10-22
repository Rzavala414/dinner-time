import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

export default function Navbar() {
    return(
        <nav>
            <h1 className="logo"> Dinner <span>Time</span> <FontAwesomeIcon className="utensils-icon" icon={faUtensils} /> </h1> 
            <Link to='/'>Random Recipe</Link>
            <Link to='/allrecipes'>All Recipes</Link>
        </nav>
    );
}