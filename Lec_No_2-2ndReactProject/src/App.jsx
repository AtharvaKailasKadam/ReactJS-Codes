// Now Using the React Fragments.
// This import Name as 'NetflixSeries' can be anything.

import { NetflixSeries } from "./components/NetflixSeries";
import { EventHandling } from "./components/EventHandling";
import "./components/Netflix.module.css";

export let App = () => {
  return (
    // Can also use the '<Fragment>  </Fragment>' as a Parent div.
    <section className = "container">
      <NetflixSeries />
      <EventHandling />
    </section>
  );
};

// We can use the Dynamic Values in this.
// 1. Variable Values.s
// 2. Expressions.
// 3. Functions.
//