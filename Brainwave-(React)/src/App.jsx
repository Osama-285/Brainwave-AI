import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import reactLogo from "./assets/react.svg";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;