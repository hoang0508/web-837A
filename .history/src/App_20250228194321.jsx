import { useState } from "react";
import reactLogo from "./assets/react.svg";
import anh83 from "./assets/anh832.png";
import Typewriter from "typewriter-effect";
import { Radio } from "antd";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ App ~ count:", count);

  return (
    <>
      <div className="text-2xl font-bold  bg-pink-200 min-h-screen p-10">
        <div className="bg-white shadow-3xl p-3 w-[800px]  my-0 mx-auto rounded-2xl">
          <h1 className="text-center text-red-400 p-4 uppercase">
            Chi đoàn 7A - CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ 8-3
          </h1>
          <div className="mx-auto w-[500px] h-[300px]">
            <img
              src={anh83}
              alt="##"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="border-b-2 border-gray-200">
            <Typewriter
              options={{
                strings: [
                  `${"Chúc các cô giáo và chị em học viên, ngày 8-3 vui vẻ, hạnh phúc, luôn mạnh khỏe và thành công! 🌸💐❤️❤️❤️💰"}`,
                ],
                delay: 75,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="my-3">
            <h3 className="text-center font-bold text-red-500 mb-2 text-3xl">
              Cuộc thi duyên dáng HV nhân ngày 8-3
            </h3>
            <div className="flex justify-center items-center">
              <p className="text-center italic text-base max-w-xl font-light">
                Mời thầy cô và các bạn chọn vào ô dành cho học viên tham gia
                bình chọn hoặc thầy cô tham gia bình chọn cho các thí sinh
              </p>
            </div>
            <Radio.Group
              value={count}
              options={[
                { value: 1, label: "A" },
                { value: 2, label: "B" },
              ]}
            />
            <div className="py-3 flex justify-center items-center">
              <button className="flex justify-center items-center py-3 px-4 bg-red-500 rounded-lg shadow-lg text-white">
                Tham gia bình chọn tại đây
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
