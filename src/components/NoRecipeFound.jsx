
import "../css/NoRecipeFound.css"
import NoRecipe from "../assets/no-recipe.svg"
import InputForm from "./InputForm";
import ListLetters from "./ListLetters";
import Flags from "./Flags";
function NoRecipeFound({recipe}){

    return(
        <div className="no-recipe-found-container">
            <InputForm />
            <p>{`Sorry, recipe "${recipe}" is not found`}</p>
            <div className="no-recipe-found-img-container">
                <img src={NoRecipe} alt="no recipe img" />
            </div>
            <ListLetters />
            <Flags />
          
        </div>
    )
}

export default NoRecipeFound;