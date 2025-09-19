import { useId } from "react"

export const UseId=() =>
{
    const usernameId = useId();
    const emailId = useId();
    return(
        <form>
            <div>
                <label htmlFor={usernameId}>UserName:</label>
                <input type="text" id={usernameId} name="name"/>
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" id={emailId} name="email" />
            </div>
            <button>Submit</button>
        </form>
    )
}