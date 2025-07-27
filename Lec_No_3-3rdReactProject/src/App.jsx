export let App = () =>
{
return (
  <>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
  </>
)
};

const NetflixSeries = () =>
{
  const Name = "Game of Thrones.";
  const Seasons = "8";
  const Ratings = "9.2";
  return(
    <div>
      <h1> Name : {Name} </h1>
      <h2> Seasons : {Seasons} </h2>
      <h2> Rating :{Ratings} </h2>
      <h2> Genre : {GenreFun} </h2>
    </div>
  )
}

function GenreFun ()
{
  return "Action, Thriller, Adventure";
}