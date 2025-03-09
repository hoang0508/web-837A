import anh83 from "./assets/anh832.png";
import nhacMP3 from "./assets/nhac.mp3";
import "./index.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Send, TvMinimal, Volume2, VolumeOff } from "lucide-react";

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

  const audioRef = useRef(new Audio(nhacMP3));
  const [isPlaying, setIsPlaying] = useState(false);

  // Dừng nhạc khi chuyển trang
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset về đầu
    };
  }, []);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Lỗi phát nhạc:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="text-2xl font-bold  bg-pink-200 min-h-screen p-10 wrapper">
        <div className="bg-white shadow-3xl p-3 max-w-[800px]  my-0 mx-auto rounded-2xl wrapper-content">
          <div className="text-center mb-4">
            <h1 className="text-center text-red-400 uppercase wrapper-content--title mb-2">
              Chi đoàn VB7A
            </h1>
            <p className="wrapper-content--heading text-pink-500 text-[32px]">
              Chúc mừng ngày Quốc tế Phụ nữ 8-3
            </p>
          </div>
          <div className="mx-auto max-w-[500px] h-[300px] wrapper-content--image">
            <img
              srcSet={`${anh83} 1x`}
              alt="##"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <p className="border-b-2 border-gray-200 Typewriter pb-4">
            Nhân ngày 8-3, kính chúc các cô giáo và các bạn nữ học viên luôn
            rạng rỡ, hạnh phúc, dồi dào sức khỏe và gặt hái nhiều thành công
            trong cuộc sống! ❤️❤️❤️
          </p>
          <p className="text-pink-400 font-medium my-4 px-4 text-center Typewriter-send">
            Hãy gửi những lời chúc ❤️, lời yêu thương ❤️❤️ đến các cô và các bạn
            nữ học viên của học viện
          </p>
          <div className="my-3  wrapper-content--bottom">
            <div className="flex flex-col items-center gap-5 justify-center wrapper-content--btn max-w-[230px] mx-auto">
              <button
                onClick={(e) => handleClickBtn(e)}
                className="wrapper-content--button w-full flex justify-center items-center gap-2 py-3 px-4 bg-red-400 rounded-lg shadow-lg text-base text-white"
              >
                <span>
                  <Send />
                </span>
                <span>Gửi lời chúc</span>
              </button>
              <button
                onClick={(e) => handleClickBtnWatch(e)}
                className="wrapper-content--button w-full flex justify-center items-center gap-2 text-base py-3 px-4 bg-red-500 rounded-lg shadow-lg text-white"
              >
                <span>
                  <TvMinimal />
                </span>
                <span>Xem lời chúc mừng</span>
              </button>
            </div>
          </div>
          {/* <Link to={"/member"}>
            <span className="text-sm font-semibold underline block text-center text-red-400 cursor-pointer italic leading-[1.5]">
              Xem danh sách thí sinh tham gia cuộc thi duyên dáng HVQT
            </span>
          </Link> */}
          <Link to={"/result"}>
            <span className="text-sm font-semibold underline block text-center text-red-400 cursor-pointer italic leading-[1.5]">
              Xem kết quả thí sinh tham gia cuộc thi duyên dáng HVQT
            </span>
          </Link>
        </div>
        <button className="fixed bottom-5 left-[30px]" onClick={togglePlay}>
          {isPlaying ? (
            <Volume2 size={40} strokeWidth={1.75} />
          ) : (
            <VolumeOff size={40} strokeWidth={1.75} />
          )}
        </button>
      </div>
      <p className="text-center font-semibold py-2">© 2025 by VB7A</p>
    </>
  );
}

export default App;
