import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Lists";
import styles from "./Netflix.module.css";


// Map method i.e. 'map()' is Must in this Implementation.
export const NetflixSeries = () => {
return (
    <ul className = {styles.seriescard}>
        {seriesData.map((curElem) => (
            <SeriesCard key = { curElem.id } data = { curElem }/>
            ))}
    </ul>
    );
};



// 'key' is must in this Implementation.
// 'key' is used to identify the element in the list.
// 'key' is used to update the element in the list.
// 'key' is used to delete the element in the list.