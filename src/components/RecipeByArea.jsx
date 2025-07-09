import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/RecipeByArea.css"
import { filterByArea } from "../services/api";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import InputForm from "./InputForm";
import ListLetters from "./ListLetters";
import Flags from "./Flags";
function RecipeByArea(){

    const [recipes, setRecipes] = useState([]);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const query = searchParams.get("q");

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await filterByArea(query);
                setRecipes(response);
                setLoading(false);
            } catch(err){
                console.error(err)
            }
         
        }

        fetchData();
    }, [query]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [query])

    if(loading){
        return <Loading />
    }

    
   

   

      const areaToCode = {
        American: "us",
        British: "gb",
        Canadian: "ca",
        Chinese: "cn",
        Croatian: "hr",
        Dutch: "nl",
        Egyptian: "eg",
        Filipino: "ph",
        French: "fr",
        Greek: "gr",
        Indian: "in",
        Irish: "ie",
        Italian: "it",
        Jamaican: "jm",
        Japanese: "jp",
        Kenyan: "ke",
        Malaysian: "my",
        Mexican: "mx",
        Moroccan: "ma",
        Polish: "pl",
        Portuguese: "pt",
        Russian: "ru",
        Spanish: "es",
        Thai: "th",
        Tunisian: "tn",
        Turkish: "tr",
        Ukrainian: "ua",
        Uruguayan: "uy",
        Vietnamese: "vn",
    };


    
 
    return(
        <div className="filter-by-area-container">
            <InputForm />
            <div className="filter-by-area-title">
                <p>{query} Recipes</p>
                <img src={`https://flagcdn.com/w80/${
                      areaToCode[query]
                    }.png`} alt="" />
            </div>
            <div className="filter-by-area-grid">
                {recipes?.meals?.map((recipe) => {
                    return <RecipeCard recipe={recipe} key={recipe.idMeAL}/>
                })}
            </div>
            <ListLetters />
            <Flags />
          
        </div>
    )
}

export default RecipeByArea;