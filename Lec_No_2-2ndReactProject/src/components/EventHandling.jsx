import styles from "./EventHandling.module.css";

export const EventHandling = () =>
{

    const handleButtonClick = () =>
    {
        alert("I'm Event Handling Event...!");
        console.log("Button Clicked");
    }
    return(
        <>
            <button className={styles.ClickButton} onClick={handleButtonClick}> Click Me..! </button>
        </>
    )
}

import React from 'react';