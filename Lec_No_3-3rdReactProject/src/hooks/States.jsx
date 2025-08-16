import { useState } from "react"
import styles from "./States.module.css"


export const State = () =>
{
    const {container, h1, button} = styles;


    const [count, setCount] = useState(0);
    const handleButtonClick = () =>
    {
        setCount(count + 1);
    }
    return (
        <>
            <div className = {container}>
                <h1 className = {h1}>{count}</h1>
                <button className = {button} onClick = {handleButtonClick}>Increment</button>
            </div>
        </>
    )
}