import { useState } from "react";

export const Counter = () =>
{

    const [isCount, setCount] = useState(0);

    return(
        <div className="container state-container" style ={{textAlign: "center"}}>
            <h1>useState Hook..!</h1>
            <br />
            <p>Count = {isCount}</p>
            <button onClick={() => setCount(isCount + 1)}>Increment</button>
        </div>

    )
}