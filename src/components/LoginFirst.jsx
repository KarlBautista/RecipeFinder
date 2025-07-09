import "../css/LoginFirst.css"
import { Link } from "react-router-dom";

function LoginFirst(){
    return(
        <div className="login-first-container">
            <div className="login-first-card">
                <div className="lock-icon">
                    🔒
                </div>
                <h2>Login Required</h2>
                <p>You need to login first to pick your favorite recipes</p>
                <div className="login-buttons">
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/register" className="register-btn">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginFirst;