import { useParams } from 'react-router-dom';
import FoodContentContainer from '../../components/FoodContentContainer/FoodContentContainer';
import RecipeImage from '../../components/RecipeImage/RecipeImage';

export default function Recipe(props) {
    const { id } = useParams()
    const  recipe  = props.recipe;
    
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