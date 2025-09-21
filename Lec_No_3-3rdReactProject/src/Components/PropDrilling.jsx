import React from "react";

export const ParentComponent=()=>
{
    return(
        <div>
            <h1>Component A</h1>
            <ChildComponent data="React JS" />
        </div>
    );
}

const ChildComponent=(props)=>
{
    return(
        <div>
            <h1>Component B</h1>
            <GrandChildComponent data={props.data} />
        </div>
    );
}

const GrandChildComponent=(props) =>
{
    return(
        <>
            <h1>Component C</h1>
            <h1>Hello World...! I'm Component C data={props.data} </h1>
            <GrandGrandChildComponent />
        </>
    )
}

const GrandGrandChildComponent=(props) =>
{
    return(
        <>
            <h1>Component D</h1>
            <h2>Hello World....! I'm Component D data={props.data}</h2>
        </>
    )
}