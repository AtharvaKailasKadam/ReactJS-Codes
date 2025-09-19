import { useRef } from "react";

export const UseRef=() =>
{
    const username = useRef();
    const password = useRef();
    const handleFormSubmit=(e) =>
        {
            e.preventDefault();
            console.log(username.current.value, password.current.value)
        }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username}></input>
            <input type="password" id="password" ref={password}/>
            <button>Submit</button>
        </form>
    )
}