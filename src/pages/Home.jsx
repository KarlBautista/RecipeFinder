
import { useEffect, useState } from "react";
import "../css/Home.css"
import InputForm from "../components/InputForm";
import RandomRecipes from "../components/RandomRecipes";
import AllCategories from "../components/AllCategories";
import Brand from "../components/Brand"

function Home(){
    return(
        <div className="home-container">
             <Brand />
                <InputForm />
              <RandomRecipes />
              <AllCategories />
        </div>



    )
    
}

export default Home;