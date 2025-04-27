import React from "react";
import { ExhibitionPage } from "./exhibition";
import BgImage from "./assets/banner.jpg";
import { useNavigate } from "react-router-dom";
import nhacMP3 from "./assets/nhacMP3.mp3";
import VolumePage from "./VolumePage";

const App = () => {
  const style = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  const handleClickBtnWatch = () => {
    navigate("/exhibition");
  };
  return (
    <>
      <div className="min-h-screen flex items-center" style={style}>
        <div className="mt-6  text-center">
          <h3 className="text-2xl px-3 leading-[1.5] text-white font-medium">
            Kính mời các thầy cô và các bạn học viên cùng xem những thông tin
            chi tiết về triển lãm lịch sử ngày 30/4 và 1/5
          </h3>
          <button
            onClick={() => handleClickBtnWatch()}
            className="border-white border-2 font-medium text-white border-solid rounded-full py-4 px-5 mt-4"
          >
            Bấm chọn vào xem
          </button>
        </div>
        <VolumePage song={nhacMP3} />
      </div>
      <p className="text-center font-semibold py-2">© 2025 by VB7A</p>
    </>
  );
};

export default App;
