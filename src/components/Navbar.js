import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';

export default function Navbar() {
    return(
        <nav>
            <h1 className="logo"> Dinner <span>Time</span> </h1> 

            <input className="search-box" type='search' /> 
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            
        </nav>
    );
}