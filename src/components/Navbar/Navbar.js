import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';

export default function Navbar() {
    return(
            <nav>
                <Link to='/'>Random Recipe</Link>
                <span className="logo"> Dinner <span>Time</span> <FontAwesomeIcon className="utensils-icon" icon={faUtensils} /> </span> 
                <Link to='/allrecipes'><FontAwesomeIcon className="search-icon" icon={faSearch} /> </Link>
            </nav>
    );
}