export const SeriesCard = (props) => {
    const {id, name, imgUrl, season, episode, rating, genre, description, watchUrl} = props.data;
    return(
        <li className = "anime-card" key = {id}>
            <div>
                <h1>Name: {name} </h1>
                <div>
                    <img src = {imgUrl} alt = "IMAGE" width = "40%" height = "40%" />
                </div>
                <div>
                    <h3> Seasons : {season} </h3>
                    <h3> Episodes : {episode} </h3>
                    <h3> Ratings : {rating}/10 </h3>
                    <p> Genre : {genre} </p>
                    <p style = {{fontSize : "15px"}}> Description : {description}</p>
                    <a href = {watchUrl} target = "_blank"> <button>Watch Now</button> </a>
                </div>
            </div>
        </li>
    );
};

