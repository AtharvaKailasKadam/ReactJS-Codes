import { useState } from "react";


const Button = ({onClick, children}) =>{
    console.log(`Rendering Button : ${children}`)

    return (
        <button onClick = {onClick}> {children} </button>
    );
};

export default function UseCallBack() {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log("Increment Inside");
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => setCount((prevCount) => prevCount - 1);

    return (
        <div>
            <h1> Count : {count} </h1>
            <button onClick = {increment}> INCREMENT </button>
            <Button onClick = {decrement}> DECREMENT  </Button>
        </div>
    )
}

