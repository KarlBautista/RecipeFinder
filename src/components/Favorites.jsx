
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginFirst from "./LoginFirst";

function Favorites(){
    const navigate = useNavigate();
    const { user } = useAuthContext();
    
 
    if(user === null){
        return <LoginFirst />
    }

    return(
        <div>
            <h1>Your Favorite Recipes</h1>
         
        </div>
    )
}

export default Favorites;