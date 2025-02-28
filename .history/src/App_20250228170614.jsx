import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl font-bold underline bg-green-200">
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
