import './SearchBar.css';

export default function SearchBar(props){
    const { searchForRecipe } = props;
    
    return( 
        <div className="searchbar-container">
            <input className="searchbar" type='text' placeholder="Find a Recipe" onChange={searchForRecipe} /> 
        </div>
    );

};