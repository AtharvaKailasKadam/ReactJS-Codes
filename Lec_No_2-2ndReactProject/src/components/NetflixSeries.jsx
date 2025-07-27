import seriesData from "../api/seriesData.json";

// Map method i.e. 'map()' is Must in this Implementation.
export const NetflixSeries = () => {
return (
    <ul>
        {seriesData.map(curElem => {
                return(
                    <li key = {curElem.id}>
                        <div>
                            <h1>Name: {curElem.name} </h1>
                            <div>
                                <img src = {curElem.imgUrl} alt = "GOT" width = "40%" height = "40%" />
                            </div>
                            <h3> Seasons : {curElem.season} </h3>
                            <h3> Episodes : {curElem.episode} </h3>
                            <h3> Ratings : {curElem.rating}/10 </h3>
                            <p> Genre : {curElem.genre} </p>
                            <p> Description : {curElem.description}</p>
                            <a href = {curElem.watchUrl} target = "_blank"> <button>Watch Now</button> </a>
                        </div>
                    </li>
                );
            })}
    </ul>
);
}