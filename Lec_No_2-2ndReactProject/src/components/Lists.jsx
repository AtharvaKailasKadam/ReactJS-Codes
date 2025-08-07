import  styles from "./Netflix.module.css";
import styled from "styled-components";


export const SeriesCard = (props) => {
    const {id, name, imgUrl, season, episode, rating, genre, description, watchUrl} = props.data;

    const ratingClass = rating >= 8.5 ? styles.superhit : styles.average;

    return(
        <li className = {styles.animecard} key = {id}>
            <div>
                <h1>Name: {name} </h1>
                <div>
                    <img src = {imgUrl} alt = {name} width = "40%" height = "40%" />
                </div>
                <div>
                    <h3> Seasons : {season} </h3>
                    <h3> Episodes : {episode} </h3>
                    <h3> Ratings : {/* Corrected the duplicated {rating} here */}
                        <span className= {`${styles.rating} ${ratingClass}`}>{rating} / 10 </span>
                    </h3>
                    <p> Genre : {genre} </p>
                    <p style = {{fontSize : "15px"}}> Description : {description}</p>
                    {/* It's a good practice to add rel="noopener noreferrer" for security */}
                    <a href = {watchUrl} target = "_blank" rel="noopener noreferrer"> <button>Watch Now</button> </a>
                </div>
            </div>
        </li>
    );
};