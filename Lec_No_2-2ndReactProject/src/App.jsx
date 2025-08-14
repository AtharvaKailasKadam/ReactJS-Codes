import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.module.css";
import "./components/EventHandling.module.css";

export let App = () => {
  return (

    <section className = "container">
      <NetflixSeries />
    </section>
  );
};

// We can use the Dynamic Values in this.
// 1. Variable Values.s
// 2. Expressions.
// 3. Functions.
//