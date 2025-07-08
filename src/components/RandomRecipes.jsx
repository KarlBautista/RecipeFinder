import "../css/RandomRecipes.css"
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { searchRandomRecipe } from "../services/api";
import RecipeCard from "../components/RecipeCard"
function RandomRecipes(){
    const [homeRecipe, setHomeRecipe] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
     const searchForRandomRecipe = async () => {
   
        try{
            const promises = Array.from({ length: 12 }, () => searchRandomRecipe());
            const results = await Promise.all(promises);
            const recipes = results.map(result => result?.meals?.[0]).filter(Boolean);
            setHomeRecipe(recipes);
            setLoading(false);
          
        } catch (err){
            console.error(err)
        }
    }

    searchForRandomRecipe();
    
 }, []);
        
    if(loading){
        return <Loading />
    }
        


    return(
        <div className="random-recipes-container">
             <div className="random-recipes-title-container">
                 <p>12 Random Recipes</p>
            </div>
             
            <div className="random-recipe-container">
                {!loading && homeRecipe?.map((recipe) => {
                    console.log(recipe)
                    return <RecipeCard recipe={recipe} key={recipe.idMeal}/>
                })}
            </div>

        </div>
    )
}

export default RandomRecipes;