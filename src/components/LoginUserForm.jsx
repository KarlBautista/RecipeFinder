import { useEffect, useState } from "react";
import "../css/LoginUserForm.css"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginUserForm(){
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [user, setUser ] = useState({
        name: "",
        password: "",
    })
   
    const loginUser = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            
            if (response.ok) {
                console.log("Login successful:", data.user);
                login(data.user);
                navigate("/")
                
            } else {
                console.error("Login failed:", data.error);
                // Handle login error here
            }
        
        } catch (err){
            console.error("Network error:", err);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(u => ({...u, [name]:value}));
    }
    return (
        <div className="login-form-container">
               <form onSubmit={loginUser}>
                <h2>Welcome Back</h2>
                <div className="form-group">
                    <input type="text"
                            name="name"
                            onChange={handleInputChange}
                            value={user.name}
                            required
                            placeholder="Your name"/>
                </div>
                <div className="form-group">
                    <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={user.password}
                            required
                            placeholder="Your password"/>
                </div>
                <button type="submit">Sign In</button>
                <div className="form-footer">
                    <p>Don't have an account?</p>
                    <a href="/register">Create Account</a>
                </div>
                </form>
        </div>
    )
}

export default LoginUserForm;