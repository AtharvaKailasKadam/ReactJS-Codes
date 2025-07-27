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




let age = prompt("Enter Your Age: ");
const NetflixSeries = () =>
{
  let wishlist = 'Add to Wishlist';
  if(age < 18)
  {
    wishlist = "Not Allowed";
  }
  const Name = "Game of Thrones.";
  const Seasons = "8";
  const Ratings = "9.2";
  return(
    <div>
      <h1> Name : {Name} </h1>
      <h2> Seasons : {Seasons} </h2>
      <h2> Rating :{Ratings} </h2>
      <h2> Genre : {GenreFun()} </h2>
      <button> {age >= 18 ? 'Watch Now' : 'Not Allowed to Watch'} </button>
      <button> {wishlist} </button>
    </div>
  )
}

function GenreFun ()
{
  return "Action, Thriller, Adventure";
}

// Conditionals in JSX