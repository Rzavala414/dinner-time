import './SearchBar.css';

export default function SearchBar(props){
    const { searchForRecipe } = props;
    
    return( 
        <>
            <input className="searchbar" type='text' placeholder="Find a Recipe" onChange={searchForRecipe} /> 
        </>
    );

};