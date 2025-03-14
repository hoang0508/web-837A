import { useState } from "react";
import reactLogo from "./assets/react.svg";
import anh83 from "./assets/anh83.jpg";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl font-bold  bg-pink-400-200  min-h-screen p-20!">
        <div className="bg-white shadow-3xl w-[800px] h-[500px] my-0 mx-auto rounded-2xl">
          <h1 className="text-center text-red-400 p-10 uppercase">
            Chi đoàn 7A - CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ 8-3
          </h1>
          <div className="w-[90px] h-[90px] relative">
            <img src={anh83} alt="##" className="w-full h-full object-cover" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
