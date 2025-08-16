export const State = () =>
{
    let value = 0;
    const handleButtonClick = () =>
    {
        value = value + 1;
        console.log("Currnet Value : ", value);
    }
    return (
        <>
            <h1>{value}</h1>
            <button onclick = {handleButtonClick}>Increment</button>
        </>
    )
}