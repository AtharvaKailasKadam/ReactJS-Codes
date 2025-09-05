import { useState } from "react"

export const ShortCircuitEvaluations = () =>
{
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [isUser, setUser] = useState("");


    return (
        <div className="OuterBlock">
            <div className="TextArea">
            {isLoggedIn && <p>User Logged In..!</p>}
            {isUser ?`Hii ${isUser}` : "Please Log In"}

            </div>
            <button className = "LoggedinButton" onClick={() => setLoggedIn(!isLoggedIn)}>Log In</button>
            <button className="SetUserButton" onClick={() => setUser("Hello Atharva Kadam")}>Set User</button>
            <button className = "ClearUserLogin"onClick={() => setUser("")}>Clear User</button>

        </div>
    )

}