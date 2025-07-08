import { useState } from "react";
import "../css/InputForm.css"
import { searchForRecipes } from "../services/api";
import { useNavigate } from "react-router-dom"

 function InputForm(){
      const [search, setSearch] = useState("");
      const navigate = useNavigate();
      

        const searchDish = async (e) => {
            e.preventDefault();
            if(search.trim()){
                navigate(`/search?q=${encodeURIComponent(search.trim().toLowerCase())}`);
            }
        }
    
        return(
            <div className="input-container">
                <form onSubmit={searchDish}>
                    <div className="form-group">
                        <input type="text"
                            name="dish"
                            className="input-dish"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            required
                            placeholder="Search for recipes...."/>
                        <button type="submit" className="search-dish-btn">Search</button>
                    </div>
                  
                </form>
    
            </div>
        )
        
    }

    export default InputForm;
