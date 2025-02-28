import { useState } from "react";
import reactLogo from "./assets/react.svg";
import anh83 from "./assets/anh832.png";
import Typewriter from "typewriter-effect";

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
          <Typewriter
            options={{
              strings: [
                `${"Chúc cô giáo và các chị em học viên, sinh viên ngày 8-3 vui vẻ, hạnh phúc, luôn mạnh khỏe và thành công! 🌸💐❤️❤️❤️💰"}`,
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
