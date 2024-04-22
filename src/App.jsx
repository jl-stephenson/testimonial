import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import StarBox from "./components/StarBox";
import TestimonialBox from "./components/TestimonialBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <StarBox name="Reviews" number={5} />
      <TestimonialBox />
    </>
  );
}

export default App;
