import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchFirstLetterRecipes } from "../services/api";
import RecipeCard from "./RecipeCard";
import "../css/FirstLetterRecipes.css"
import InputForm from "./InputForm";
import Loading from "./Loading";
import NoRecipeFound from "./NoRecipeFound";


function FirstLetterRecipes(){
    const [recipes, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await searchFirstLetterRecipes(query);
                setRecipe(response);
                setLoading(false);
            } catch (err) {
                console.error(err)
            }
        } 

        fetchData();
    }, [query]);

    if(loading){
        return <Loading />
    }

    if(recipes?.meals === null){
       return <NoRecipeFound recipe={query}/>
    }

    return(
        <div className="first-letter-recipe-container">
              <div className="first-letter-recipe-title">
                    <p>Recipes that starts with "{query.toUpperCase()}"</p>
              </div>
             
            <div className="first-letter-recipe-grid">
                {recipes?.meals?.map((recipe) => {
                    return <RecipeCard recipe={recipe} key={recipe.idMeal}/>
                })}

            </div>
        </div>
    )
}

export default FirstLetterRecipes;