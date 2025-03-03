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
import IconLeft from "./Icons/IconLeft";
import IconRight from "./Icons/IconRight";

const Watch = () => {
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
  const currentItems = DataRes?.slice(offset, offset + itemsPerPage);
  console.log("🚀 ~ Watch ~ currentItems:", currentItems);
  const pageCount = Math.ceil(DataRes?.length / itemsPerPage); // Tổng số trang

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="p-4 bg-pink-300 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="bg-white px-5 py-3 text-red-400 font-medium rounded-lg mb-5 flex justify-center items-center gap-2"
      >
        <span>
          <IconRight />
        </span>
        <span className="text-lg">Trở về</span>
      </button>
      <div className="mb-6 flex items-center flex-col gap-3">
        <h3 className="text-lg text-red-400 font-bold py-3 px-5 rounded-md bg-white shadow-md max-w-fit">
          Những lời chúc ngày 8-3 gửi đến các cô và các bạn nữ học viên của học
          viện
        </h3>
        {currentItems?.length < 0 ? (
          <span class="loader"></span>
        ) : (
          <p className="text-slate-600 font-bold">
            Tổng hiện có {DataRes?.length} lời chúc
          </p>
        )}
      </div>
      {currentItems?.length < 0 ? (
        <span class="loader"></span>
      ) : (
        <>
          <div className="">
            {currentItems &&
              currentItems.length >= 0 &&
              currentItems.map((item, index) => (
                <div
                  className="bg-white rounded p-3 shadow-lg [&:not(:last-child)]:mb-4"
                  key={index}
                >
                  <span className="border-b-2 border-gray-200 pb-2 mb-3 inline-block text-red-400">
                    {dayjs(item[0]).format("L")}
                  </span>
                  <p className="font-medium text-slate-900 break-words leading-[1.5] max-h-32 overflow-y-auto scrollbar scroll-m-4 pr-6">
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

export default Watch;
