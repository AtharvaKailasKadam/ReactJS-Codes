import { LiftingState } from "./Components/LiftingTheStateUp"
import { ShortCircuitEvaluations } from "./ShortCircuitEvaluation"
import { Counter } from "./Components/hooks/useState";
import { ChallengeofuseState } from "./Components/hooks/useState/Challenge";
export const App = () =>
{
  return(
    <>
    <section className = "Container">
    <ChallengeofuseState />
    </section>
    </>
  )
}