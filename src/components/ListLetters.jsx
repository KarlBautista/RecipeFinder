
import "../css/ListLetters.css"
import { useNavigate } from "react-router-dom"

function ListLetters(){
    const navigate = useNavigate();
    const firstLetterRecipes = (letter) => {
        try{
            navigate(`/searchFirstLetter?q=${letter}`);
        } catch (err) {
            console.error(err)
        }
    }
    return(
        <div className="letters-container">
            <p onClick={() => firstLetterRecipes("a")}>A</p>
            <p onClick={() => firstLetterRecipes("b")}>B</p>
            <p onClick={() => firstLetterRecipes("c")}>C</p>
            <p onClick={() => firstLetterRecipes("d")}>D</p>
            <p onClick={() => firstLetterRecipes("e")}>E</p>
            <p onClick={() => firstLetterRecipes("f")}>F</p>
            <p onClick={() => firstLetterRecipes("g")}>G</p>
            <p onClick={() => firstLetterRecipes("h")}>H</p>
            <p onClick={() => firstLetterRecipes("i")}>I</p>
            <p onClick={() => firstLetterRecipes("j")}>J</p>
            <p onClick={() => firstLetterRecipes("k")}>K</p>
            <p onClick={() => firstLetterRecipes("l")}>L</p>
            <p onClick={() => firstLetterRecipes("m")}>M</p>
            <p onClick={() => firstLetterRecipes("n")}>N</p>
            <p onClick={() => firstLetterRecipes("o")}>O</p>
            <p onClick={() => firstLetterRecipes("p")}>P</p>
            <p onClick={() => firstLetterRecipes("q")}>Q</p>
            <p onClick={() => firstLetterRecipes("r")}>R</p>
            <p onClick={() => firstLetterRecipes("s")}>S</p>
            <p onClick={() => firstLetterRecipes("t")}>T</p>
            <p onClick={() => firstLetterRecipes("u")}>U</p>
            <p onClick={() => firstLetterRecipes("v")}>V</p>
            <p onClick={() => firstLetterRecipes("w")}>W</p>
            <p onClick={() => firstLetterRecipes("x")}>X</p>
            <p onClick={() => firstLetterRecipes("y")}>Y</p>
            <p onClick={() => firstLetterRecipes("z")}>Z</p>

        </div>
    )
}

export default ListLetters;