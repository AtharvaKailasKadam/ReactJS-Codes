import { useEffect, useState } from "react";
import "./index.css";

export const ReactuseEffect=() =>
{
    useEffect(() => {
        console.log("Count Value : ", isCount);
    },[isCount]);

    const [isCount, setCount] = useState(0);

    return(
        <div className="container state-container">
            <h1>useEffect Hook..!</h1>
            <p>useEffect Hook,..!</p>
            <p> Count : {isCount}</p>
            <button onClick={() => setCount(isCount + 1)}>Increment</button>
        </div>
    );
};