import anh83 from "./assets/anh832.png";
import Typewriter from "typewriter-effect";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClickBtn = (e) => {
    e.preventDefault();
    window.open(
      "https://docs.google.com/forms/d/1T-1u7o7jFZ_WVF_ZJ3NbZ3-60GEO2_tVjLDYah774pk/edit?hl=vi#responses"
    );
  };

  const handleClickBtnWatch = () => {
    navigate("/watch");
  };

  return (
    <>
      <div className="text-2xl font-bold  bg-pink-200 min-h-screen p-10 wrapper">
        <div className="bg-white shadow-3xl p-3 max-w-[800px]  my-0 mx-auto rounded-2xl wrapper-content">
          <h1 className="text-center text-red-400 p-4 uppercase wrapper-content--title">
            Chi đoàn 7A - CHÚC MỪNG NGÀY QUỐC TẾ PHỤ NỮ 8-3
          </h1>
          <div className="mx-auto max-w-[500px] h-[300px] wrapper-content--image">
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
                  `${"Chúc các cô giáo và các bạn nữ học viên, nhân ngày 8-3 vui vẻ, hạnh phúc, luôn mạnh khỏe và thành công! 🌸💐❤️❤️❤️💰"}`,
                ],
                delay: 75,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-pink-400 font-medium my-4 px-4 text-center">
            Hãy gửi những lời chúc ❤️, lời yêu thương ❤️❤️ đến các cô và các bạn
            nữ học viên của học viện
          </p>
          <div className="my-3  wrapper-content--bottom">
            <div className="flex items-center gap-5 justify-center wrapper-content--btn">
              <div className=" flex justify-center items-center">
                <button
                  onClick={(e) => handleClickBtn(e)}
                  className="wrapper-content--button flex justify-center items-center py-3 px-4 bg-red-400 rounded-lg shadow-lg text-base text-white"
                >
                  Gửi lời chúc
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={(e) => handleClickBtnWatch(e)}
                  className="wrapper-content--button flex justify-center items-center text-base py-3 px-4 bg-red-500 rounded-lg shadow-lg text-white"
                >
                  Xem lời chúc mừng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
