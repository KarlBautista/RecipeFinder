import { useState } from "react";
import "../css/RegisterForm.css"
function RegisterForm(){
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(u => ({...u, [name] : value}));
    }

    const registerUser = async (e) => {
     e.preventDefault();
     if(user.password !== confirmPassword){
            alert('password doesnt match');
            return;
              }
    try{
        const response = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(user),
        })
        if(!response.ok){
            throw new Error("failed to register user");
        }
        const data = await response.json();
        console.log("registered user: ",  data);
    }
    catch(err){
    console.error(err)
}
        
    }
    return(
        <div className="register-form-container">
            <form onSubmit={registerUser}>
                <h2>Create Account</h2>
                <div className="form-group">
                    <input type="text"
                            name="name"
                            onChange={handleInputChange}
                            value={user.name}
                            required
                            placeholder="Your name"/>
                </div>

                 <div className="form-group">
                    <input type="email"
                            name="email"
                            onChange={handleInputChange}
                            value={user.email}
                            required
                            placeholder="Your email"/>
                </div>
                 <div className="form-group">
                    <input type="password"
                            name="password"
                            onChange={handleInputChange}
                            value={user.password}
                            required
                            placeholder="Your password"/>
                </div>
                 <div className="form-group">
                    <input type="password"
                            name="confirmPassword"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            required
                            placeholder="Confirm password"/>
                </div>
                <button type="submit">Create Account</button>
                <div className="form-footer">
                    <p>Already have an account?</p>
                    <a href="/login">Sign In</a>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm;