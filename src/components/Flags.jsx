import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAreas } from "../services/api";


import "../css/Flags.css"

function Flags(){

    const [areas, setAreas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await getAllAreas();
                setAreas(response.meals);
            }
            catch (err){
                console.error(err)
            }
        }

        fetchData();
    }, [])

   
 




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

    const filterByArea = (area) => {
        try{
            navigate(`/area?q=${area}`);
        } catch (err){
            console.error(err)
        }
    }

 
    

    return( 
        <div className="flags-container">
          <div className="flags-grid">
                {areas?.map((area) => {
                    return <img src={`https://flagcdn.com/w80/${
                        areaToCode[area?.strArea]
                    }.png`} alt="" onClick={() => filterByArea(area?.strArea)} />
                })}

          </div>
          
        </div>
           

      
    )
}

export default Flags;