import styles from "./EventHandling.module.css";

export const EventHandling = () =>
{

    const handleButtonClick = () =>
    {
        alert("Thank You For Visiting This Page...!");
    }
    return(
        <>
            <button className={styles.ClickButton} onClick={handleButtonClick}> Click Me..! </button>
        </>
    )
}