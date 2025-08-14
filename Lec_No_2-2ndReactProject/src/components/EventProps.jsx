import style from "./EventProps.module.css";
import React from 'react';

export const EventProps = () =>
{
    return(
        <>
            <div className={style.EventProps}>
            <Welcome onclick = {() => alert("Once Again Welcome....!")} />
            </div>
        </>
    )
}

const Welcome = (props) =>
{
    const {onclick} = props;
    return(
        <div>
            <h1 className={style.Welcome}> Welcome To The Anime Watch-List</h1>
            <button className={style.ClickButton} onClick = {onclick}> Click Me </button>
        </div>
    )
}