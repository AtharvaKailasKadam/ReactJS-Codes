import './EventHandling.module.css'

export const EventHandling = () =>
{

    function handleButtonClick ()
    {
        alert("I'm Event Handling Event...!");
    }
    return(
        <>
            <button className = "ClickButton" onClick={handleButtonClick}> Click me </button>
        </>
    )
}

