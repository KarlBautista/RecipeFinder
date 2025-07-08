
import "../css/NoRecipeFound.css"
import NoRecipe from "../assets/no-recipe.svg"
function NoRecipeFound({recipe}){

    return(
        <div className="no-recipe-found-container">
            <p>{`Sorry, recipe "${recipe}" is not found`}</p>
            <div className="no-recipe-found-img-container">
                <img src={NoRecipe} alt="no recipe img" />
            </div>
          
        </div>
    )
}

export default NoRecipeFound;