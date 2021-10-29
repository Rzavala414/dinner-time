import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import FoodContentContainer from '../../components/FoodContentContainer/FoodContentContainer';
import RecipeImage from '../../components/RecipeImage/RecipeImage';

export default function Recipe(props) {
    const  recipe  = props.recipe;
    const { search } = useLocation();
    const { id } = queryString.parse(search);
    

    return(
        <>
            <RecipeImage recipes={recipe} foodID={id}/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <FoodContentContainer recipes={recipe} foodID={id} />
        </>
    )
}