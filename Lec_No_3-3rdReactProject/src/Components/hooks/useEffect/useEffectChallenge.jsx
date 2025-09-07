import { useEffect, useState } from "react";

export const ReactuseEffectChallenge=() =>
{
    const [isCount, setCount] = useState(0);
    const [isName, setName] = useState("");

    useEffect(()=> {
        document.title = `Count : ${isCount}`;
    },[isCount]);

    useEffect(()=> {
        console.log(isName);
    },[isName]);

    return(
        <div className = "container state-container">
            <h1>useEffect Challenge,..!</h1>
            <p>Count :- {isCount}</p>
            <button onClick={() => setCount(isCount + 1)}>Increment</button>
            <p>
                Name :<span> {isName} </span>
            </p>
            <input type="text" value={isName} onChange={(e) => setName(e.target.value)}></input>
        </div>
    );
};