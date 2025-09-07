import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () =>
{
    const [user, setUser] = useState({
        uName : "",
        uPassword : ""
    });

    const handleSubmit=(event) =>
    {
        event.preventDefault();
        console.log(user);
    }
    const handleChange=(e)=>
    {
        const {name, value} = e.target;
        setUser((prev)=> ({...prev, [name]:value}))
    }

    return(
        <div className="OuterFormBody">
            <form className="formBody" onSubmit={handleSubmit}>
                <label htmlFor="uName">UserName</label>
                <input type="text" className="userInput" name="uName" placeholder="Enter Your UserName..!" required value={user.uName} onChange = {handleChange}></input>

                <label htmlFor="uPassword">Password</label>
                <input type="password" className="userInput" name="uPassword" placeholder="Enter Your Password..!" required value={user.uPassword} onChange = {handleChange}></input>

                <button type="submit" >Login</button>
            </form>
        </div>
    )
}