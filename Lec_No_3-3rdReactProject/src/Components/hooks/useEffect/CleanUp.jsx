import { useEffect, useState } from "react";

export const CleanUp =() =>

{
    const [isCount, setCount] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
        return () => clearInterval(timer);
    },[isCount])



    return(
        <div className="Container">
            <div className="counter">
                <p> My Subscribers on YouTube</p>
                <div className="odometer" id = "odometer">
                    {isCount}
                </div>
                <h3 className = "title"> Subscribers <br /> RealTime Counter</h3>
            </div>
        </div>
    );
};