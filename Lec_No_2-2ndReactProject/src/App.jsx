// Now Using the React Fragments.

// This import Name as 'NetflixSeries' can be anything.
import { NetflixSeries, Footer, Header } from "./components/NetflixSeries";

export let App = () => {
  return (
    // Can also use the '<Fragment>  </Fragment>' as a Parent div.
    <>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </>
  );
};

// We can use the Dynamic Values in this.
// 1. Variable Values.
// 2. Expressions.
// 3. Functions.
