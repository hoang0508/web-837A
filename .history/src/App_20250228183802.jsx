import { useState } from "react";
import reactLogo from "./assets/react.svg";
import anh83 from "./assets/anh832.png";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl font-bold  bg-pink-200 min-h-screen p-10">
        <div className="bg-white shadow-3xl w-[800px] p-3 my-0 mx-auto rounded-2xl">
          <h1 className="text-center text-red-400 p-5 uppercase">
            Chi đoàn 7A - CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ 8-3
          </h1>
          <div className="mx-auto w-[500px] h-[300px]">
            <img
              src={anh83}
              alt="##"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-400 from-green-500 p-10">
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                Hello World
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
