import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { http } from "./http";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/vi"; // Import tiếng Việt
import utc from "dayjs/plugin/utc"; // Xử lý giờ UTC
import timezone from "dayjs/plugin/timezone"; // Hỗ trợ múi giờ
import localizedFormat from "dayjs/plugin/localizedFormat";
import "./index.scss";
import "./loading.scss";
import ReactPaginate from "react-paginate";
import IconRight from "./Icons/IconRight";

const WatchPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.locale("vi"); // Đặt ngôn ngữ là Tiếng Việt
  dayjs.extend(localizedFormat);
  const fetchSheetData = async () => {
    try {
      const response = await http.get(
        `${import.meta.env.VITE_SHEET_ID}/values/Sheet1?key=${
          import.meta.env.VITE_API_KEY_GOOGLE
        }`
      );
      return response;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  // Queries
  const data = useQuery({
    queryKey: ["data1"],
    queryFn: () => fetchSheetData(),
  });
  const DataRes = data?.data?.data?.values.slice(1);

  const itemsPerPage = 5; // Số item mỗi trang
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * itemsPerPage;
  const currentItems =
    DataRes?.length > 0 ? DataRes?.slice(offset, offset + itemsPerPage) : 0;
  const pageCount = Math.ceil(DataRes?.length / itemsPerPage); // Tổng số trang

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-4 bg-pink-300 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="bg-white p-2 text-red-400 font-medium rounded-full mb-5 flex justify-center items-center gap-2"
      >
        <span>
          <IconRight />
        </span>
      </button>
      <div className="mb-6 flex items-center  gap-3 py-4 px-5 rounded-md bg-white shadow-lg max-w-fit">
        <div className="bg-pink-500 h-[70px] w-2 rounded-full mr-2"></div>
        <h3 className="text-lg text-red-400 font-bold">
          Những lời chúc ngày 8-3 gửi đến các cô và các bạn nữ học viên của học
          viện
        </h3>
      </div>
      {!currentItems || currentItems?.length <= 0 ? (
        <div className="flex justify-center items-center flex-col mt-16">
          <div className="loader"></div>
          <span className="text-white font-medium mt-3 inline-block">
            Dữ liệu đang được cập nhật
          </span>
        </div>
      ) : (
        <>
          <div className="">
            {currentItems &&
              currentItems.length >= 0 &&
              currentItems.map((item, index) => (
                <div
                  className="bg-white rounded p-3 shadow-lg [&:not(:last-child)]:mb-[18px]"
                  key={index}
                >
                  <span className="border-b-2 border-gray-200 pb-2 mb-3 inline-block text-red-400">
                    {dayjs(item[0]).format("L")}
                  </span>
                  <p className="font-semibold text-slate-900 break-words leading-[1.75] max-h-32 overflow-y-auto scrollbar scroll-m-4 pr-6">
                    {item[1]}
                  </p>
                </div>
              ))}
          </div>

          <ReactPaginate
            className="custom-pagination"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default WatchPage;
