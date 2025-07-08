import LoadingImg from "../assets/loading.svg"
import "../css/Loading.css"
function Loading(){

    return(
        <div className="loading-container">
            <img className="loading" src={LoadingImg} alt="" />
        </div>
    )
}

export default Loading;