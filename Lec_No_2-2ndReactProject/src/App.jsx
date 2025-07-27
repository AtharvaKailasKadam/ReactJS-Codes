export let App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src = "GOT.jpg" alt = "GOT" width = "40%" height = "40%" />
      </div>
      <h1> Name: Game of Thrones. </h1>
      <h3> Seasons : 8 </h3>
      <h3> Ratings : 9.2/10 </h3>
      <p> <b>Game of Thrones :</b> is an epic fantasy television series based on George R.R. Martin’s book series A Song of Ice and Fire. Set in the fictional continents of Westeros and Essos, the story follows the power struggles among noble families as they vie for control of the Iron Throne. Blending political intrigue, war, betrayal, and mythical elements like dragons and White Walkers, the series explores themes of loyalty, ambition, and survival. Known for its complex characters, unexpected plot twists, and morally grey choices, Game of Thrones captivated a global audience and became one of the most iconic TV shows of the 21st century.</p>
    </div>
  )
}

// This is how u should build the Components in the JSX file.