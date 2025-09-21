import { RegistrationReactForm } from "./Components/hooks/useState/RegistrationReactForm";
import { LoginForm } from "./Components/hooks/useState/LoginForm";
import { ContactForm } from "./Components/hooks/useState/ContactForm";
import { ReactuseEffect } from "./Components/hooks/useEffect/index";
import { ReactuseEffectChallenge } from "./Components/hooks/useEffect/useEffectChallenge";
import { CleanUp } from "./Components/hooks/useEffect/CleanUp";
import { UseRef } from "./Components/hooks/useRefs";
import { UseId } from "./Components/hooks/useID";
import { ParentComponent } from "./Components/PropDrilling";
import { BioProvider } from "./Components/hooks/ContextAPI";
import { Home } from "./Components/hooks/ContextAPI/Home";
export const App = () =>
{
  return(
    <BioProvider>
      <Home />
    </BioProvider>
  )
}