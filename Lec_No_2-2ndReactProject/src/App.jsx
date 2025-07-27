// Now Using the React Fragments.

export let App = () => {
  return (
    // Can also use the '<Fragment>  </Fragment>' as a Parent div.
    <>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </>
  );
};

// We can use the Dynamic Values in this.
// 1. Variable Values.
// 2. Expressions.
// 3. Functions.
function GenreFun ()
{
  return "Action , Drama , Action , Adventure";
}

const NetflixSeries = () => {
  const Name = "Game of Thrones";
  const Seasons = 8;
  const Ratings = 9.2;
  return (
    <div>
      <div>
        <img src = "GOT.jpg" alt = "GOT" width = "40%" height = "40%" />
      </div>
      <h1> Name: {Name} </h1>
      <h3> Seasons : {Seasons} </h3>
      <h3> Ratings : {Ratings}/10 </h3>
      <h3> Genre : {GenreFun()} </h3>
      <p> <b>Game of Thrones :</b> is an epic fantasy television series based on George R.R. Martin’s book series A Song of Ice and Fire. Set in the fictional continents of Westeros and Essos, the story follows the power struggles among noble families as they vie for control of the Iron Throne. Blending political intrigue, war, betrayal, and mythical elements like dragons and White Walkers, the series explores themes of loyalty, ambition, and survival. Known for its complex characters, unexpected plot twists, and morally grey choices, Game of Thrones captivated a global audience and became one of the most iconic TV shows of the 21st century.</p>
    </div>
  )
}

// This is how u should build the Components in the JSX file.