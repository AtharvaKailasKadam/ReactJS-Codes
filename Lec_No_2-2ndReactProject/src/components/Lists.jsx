import  styles from "./Netflix.module.css";
import styled from "styled-components";


export const SeriesCard = (props) => {
    const {id, name, imgUrl, season, episode, rating, genre, description, watchUrl} = props.data;

    const ratingClass = rating >= 8.5 ? styles.superhit : styles.average;

    const Button = styled.button({
        backgroundColor : "red",
        color : "white",
        padding : "10px 20px",
        borderRadius : "5px",
        border : "none",
        cursor : "pointer",
        "&:hover" : {
            backgroundColor : "darkred",
        },
        margin : "10px 0"

    })

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
                    <h3> Ratings : {}
                        <span className= {`${styles.rating} ${ratingClass}`}>{rating} / 10 </span>
                    </h3>
                    <p> Genre : {genre} </p>
                    <p style = {{fontSize : "15px"}}> Description : {description}</p>
                    <a href = {watchUrl} target = "_blank" rel="noopener noreferrer"> <Button>Watch Now</Button> </a>
                </div>
            </div>
        </li>
    );
};