import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchForRecipes } from "../services/api";
import InputForm from "./InputForm";
import RecipeCard from "./RecipeCard";
import "../css/SearchResult.css"
import Loading from "./Loading";
import NoRecipeFound from "./NoRecipeFound";
import Flags from "./Flags";
import ListLetters from "./ListLetters";
function searchResult(){
    const [recipes, setRecipes] = useState([]);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const query = searchParams.get("q");


    useEffect(() => {
        const fetchData = async () => {
            if(query){
                try{
                    const response = await searchForRecipes(query);
                    console.log("search Resultt to" + response)
                    setRecipes(response);
                   
                    setLoading(false);
                } catch (err){
                    console.error(err);
                }
            }
        }
        fetchData();
    }, [query]) 

     console.log(recipes);

    if(recipes?.meals === null){
        return <NoRecipeFound recipe={query}/>
    }

    return(
        <div className="search-result-main-container">
            <InputForm />
            <div className="search-result-title">
                 <p >{`Recipe results for "${query}"`}</p>
            </div>
           
        
            <div className="recipes-container">
                {recipes?.meals?.map((recipe) => {
                    return <RecipeCard recipe={recipe} key={recipe.idMeal}/>
                })}
            </div>
        <ListLetters />
        <Flags />
        

        </div>
    )
}

export default searchResult;