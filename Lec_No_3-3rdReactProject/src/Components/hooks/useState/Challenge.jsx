import "./Challenge.css"

import { useState } from "react";

export const ChallengeofuseState = () =>
{
    const[isCount, setCount] = useState(0);
    const[isStep, setStep] = useState(0);

    return(
        <div className="Outerdiv">
            <h1 className="header"><u>Challenge on 'useState'</u></h1>
            <p className="count">Count = {isCount}</p>
            <p className="step">Step =<input type = "number" className="TextBox" value={isStep} onChange={(e) => setStep(Number(e.target.value))}></input></p>

            <button className="Increment" disabled={isCount >= 100} onClick={() => setCount(isCount + isStep)}> Increment </button>
            <button className="Decrement" disabled={isCount <= 0} onClick={() => setCount(isCount - isStep)}> Decrement </button>
            <button className="Reset" onClick={() => setCount(0)}> Reset </button>
        </div>
    )
}