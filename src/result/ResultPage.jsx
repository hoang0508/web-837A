import React, { useState } from "react";
import IconRight from "../Icons/IconRight";
import { useNavigate } from "react-router-dom";
import { http1 } from "../http";
import { useQuery } from "@tanstack/react-query";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Eye } from "lucide-react";
import FireworksEffect from "../Firework";
import ModalApp from "../ModalApp";

const ResultPage = ({}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const fetchDataMember = async () => {
    try {
      const response = await http1.get("/member");
      return response;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  // Queries
  const data = useQuery({
    queryKey: ["data3"],
    queryFn: () => fetchDataMember(),
  });
  const DataResult = data?.data?.data || 0;
  const handleClickResult = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="p-4 bg-pink-100  min-h-screen">
        <button
          onClick={() => navigate(-1)}
          className="bg-red-400 p-2 text-white font-medium rounded-full mb-5 flex justify-center items-center gap-2"
        >
          <span>
            <IconRight />
          </span>
        </button>
        {DataResult <= 0 ? (
          <div className="flex justify-center items-center flex-col mt-16">
            <div className="loader"></div>
            <span className="text-red-400 font-medium mt-3 inline-block">
              Dữ liệu đang được cập nhật
            </span>
          </div>
        ) : (
          <>
            <div className="my-4">
              <div className="flex gap-x-3 mb-4 items-center">
                <span className="block w-2 h-[50px] bg-pink-400 rounded-full"></span>
                <h3 className="text-2xl font-semibold">
                  Kết quả thí sinh tham gia cuộc thi duyên dáng HVQT
                </h3>
              </div>
              <h1 className="text-[17px] mb-3 text-red-400 text-center font-semibold">
                🎉 Chúc mừng các thí sinh đạt giải! 🎉
              </h1>
              <button
                onClick={() => handleClickResult()}
                className="bg-red-400 text-white mb-4 py-3 px-4 rounded-md"
              >
                Chi tiết giải thưởng
              </button>
              <FireworksEffect />
              <div className=" flex flex-col gap-y-4">
                <div className="flex gap-3 flex-col">
                  <h3 className="text-lg font-semibold text-red-500">
                    Giải nhất: <span>{DataResult[0]?.code}</span>
                  </h3>
                  <div className="h-96 relative w-64 mx-auto member-list--image rounded-md overflow-hidden">
                    <PhotoProvider>
                      <PhotoView src={DataResult[0]?.image}>
                        <div className="relative w-full h-full cursor-pointer">
                          {/* Hình ảnh */}
                          <img
                            src={DataResult[0]?.image}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md"
                          />

                          {/* Biểu tượng Eye (click để mở ảnh) */}
                          <span className="absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center w-10 h-10 rounded-br-md overflow-hidden">
                            <Eye color="white" />
                          </span>
                        </div>
                      </PhotoView>
                    </PhotoProvider>

                    <div className="absolute bottom-0 bg-black text-white bg-opacity-30 flex justify-center py-3 cursor-pointer -translate-x-2/4  left-2/4 w-full font-semibold">
                      {DataResult[0]?.vote} phiếu bình chọn
                    </div>
                  </div>
                  <div className="text-center mt-2 font-semibold text-pink-400 text-lg">
                    <span>{DataResult[0]?.name}</span>
                    {" - "}
                    <span>{DataResult[0]?.class}</span>
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <h3 className="text-lg font-semibold text-red-500">
                    Giải nhì: <span>{DataResult[1]?.code}</span>
                  </h3>
                  <div className="h-96 relative w-64 mx-auto member-list--image rounded-md overflow-hidden">
                    <PhotoProvider>
                      <PhotoView src={DataResult[1]?.image}>
                        <div className="relative w-full h-full cursor-pointer">
                          {/* Hình ảnh */}
                          <img
                            src={DataResult[1]?.image}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md"
                          />

                          {/* Biểu tượng Eye (click để mở ảnh) */}
                          <span className="absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center w-10 h-10 rounded-br-md overflow-hidden">
                            <Eye color="white" />
                          </span>
                        </div>
                      </PhotoView>
                    </PhotoProvider>
                    <div className="absolute bottom-0 bg-black text-white bg-opacity-30 flex justify-center py-3 cursor-pointer -translate-x-2/4  left-2/4 w-full font-semibold">
                      {DataResult[1]?.vote} phiếu bình chọn
                    </div>
                  </div>
                  <div className="text-center mt-2 font-semibold text-pink-400 text-lg">
                    <span>{DataResult[1]?.name}</span>
                    {" - "}
                    <span>{DataResult[1]?.class}</span>
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <h3 className="text-lg font-semibold text-red-500">
                    Giải ba: <span>{DataResult[2]?.code}</span>
                  </h3>
                  <div className="h-96 relative w-64 mx-auto member-list--image rounded-md overflow-hidden">
                    <PhotoProvider>
                      <PhotoView src={DataResult[2]?.image}>
                        <div className="relative w-full h-full cursor-pointer">
                          {/* Hình ảnh */}
                          <img
                            src={DataResult[2]?.image}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md"
                          />

                          {/* Biểu tượng Eye (click để mở ảnh) */}
                          <span className="absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center w-10 h-10 rounded-br-md overflow-hidden">
                            <Eye color="white" />
                          </span>
                        </div>
                      </PhotoView>
                    </PhotoProvider>
                    <div className="absolute bottom-0 bg-black text-white bg-opacity-30 flex justify-center py-3 cursor-pointer -translate-x-2/4  left-2/4 w-full font-semibold">
                      {DataResult[2]?.vote} phiếu bình chọn
                    </div>
                  </div>
                  <div className="text-center mt-2 font-semibold text-pink-400 text-lg">
                    <span>{DataResult[2]?.name}</span>
                    {" - "}
                    <span>{DataResult[2]?.class}</span>
                  </div>
                </div>
              </div>
            </div>
            <ModalApp open={open} setOpen={setOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
