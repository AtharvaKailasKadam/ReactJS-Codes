import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Lists";

// Map method i.e. 'map()' is Must in this Implementation.
export const NetflixSeries = () => {
return (
    <ul className = "anime-card">
        {seriesData.map((curElem) => (
            <SeriesCard key = { curElem.id } data = { curElem }/>
            ))}
    </ul>
    );
};