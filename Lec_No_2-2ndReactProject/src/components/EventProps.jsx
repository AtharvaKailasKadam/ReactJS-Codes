import style from "./EventProps.module.css";
import React from 'react';

export const EventProps = () =>
{
    return(
        <>
            <div className={style.EventProps}>
                <Welcome />
            </div>
        </>
    )
}

const Welcome = () =>
{
    return(
        <div>
            <h1 className={style.Welcome}> Welcome To The Anime Watch-List</h1>
        </div>
    )
}