import { createContext } from "react";

const BioContext = createContext();

export const BioProvider =({children}) =>
{
    const myName = "Atharva";
    return(
        <BioContext.Provider value ={myName}>
            {children}
        </BioContext.Provider>
    )
}