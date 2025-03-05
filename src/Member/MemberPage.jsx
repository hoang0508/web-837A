import React, { useState } from "react";
import IconRight from "../Icons/IconRight";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { http1 } from "../http";
import DrawerComp from "../DrawerComp";
import "../member.scss";

const MemberPage = () => {
  const navigate = useNavigate();
  const [detailItem, setDetailItem] = useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

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
    queryKey: ["data2"],
    queryFn: () => fetchDataMember(),
  });
  const DataMember = data?.data?.data || 0;

  const handleClickDetail = (item) => {
    setDetailItem(item);
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="p-4 bg-pink-100  min-h-screen">
        <button
          onClick={() => navigate(-1)}
          className="bg-red-400 p-2 text-white font-medium rounded-full mb-5 flex justify-center items-center gap-2"
        >
          <span>
            <IconRight />
          </span>
        </button>
        {DataMember <= 0 ? (
          <div className="flex justify-center items-center flex-col mt-16">
            <div className="loader"></div>
            <span className="text-red-400 font-medium mt-3 inline-block">
              Dữ liệu đang được cập nhật
            </span>
          </div>
        ) : (
          <div className="my-4">
            <div className="flex gap-x-3 mb-4 items-center">
              <span className="block w-2 h-[50px] bg-pink-400 rounded-full"></span>
              <h3 className="text-2xl font-semibold">
                Danh sách thí sinh tham gia cuộc thi duyên dáng HVQT
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-5 member-list">
              {DataMember &&
                DataMember?.length > 0 &&
                DataMember.map((item) => (
                  <div
                    className="h-96 relative member-list--image rounded-md overflow-hidden"
                    key={item?.id}
                  >
                    <img
                      srcSet={`${item?.image} 1x`}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div
                      onClick={() => handleClickDetail(item)}
                      className="absolute bottom-0 bg-black text-white bg-opacity-30 flex justify-center py-3 cursor-pointer -translate-x-2/4  left-2/4 w-full font-semibold"
                    >
                      Xem chi tiết
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <DrawerComp
        open={open}
        setOpen={setOpen}
        loading={loading}
        data={detailItem}
      />
    </>
  );
};

export default MemberPage;
