import styles from "./EventHandling.module.css";

export const EventHandling = () =>
{

    function handleButtonClick ()
    {
        alert("I'm Event Handling Event...!");
    }
    return(
        <>
            <button className={styles.ClickButton} onClick={handleButtonClick}> Click Me,..! </button>
        </>
    )
}

