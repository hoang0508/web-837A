import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { http1 } from "../http";
import { songs } from "../data";
import ReactPaginate from "react-paginate";
import AudioPage from "./AudioPage";

const ExhibitionPage = () => {
  const itemsPerPage = 1; // Số item mỗi trang
  const [currentPage, setCurrentPage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const fetchDataContent = async () => {
    try {
      const response = await http1.get("/content");
      return response;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  // Queries
  const dataFromContent = useQuery({
    queryKey: ["data5"],
    queryFn: () => fetchDataContent(),
  });

  const combinedData =
    dataFromContent?.data?.data &&
    dataFromContent?.data?.data?.length > 0 &&
    dataFromContent?.data?.data.map((item, index) => ({
      ...item,
      audio: songs[index],
    }));

  const offset = currentPage * itemsPerPage;
  const currentItems =
    combinedData?.length > 0
      ? combinedData?.slice(offset, offset + itemsPerPage)
      : 0;
  const pageCount = Math.ceil(combinedData?.length / itemsPerPage); // Tổng số trang
  // console.log(parse(currentItems[0]?.desc));
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // cuộn mượt
    });
  };

  return (
    <div className="p-4  bg-gray-50 min-h-screen">
      {!currentItems || currentItems?.length <= 0 ? (
        <div className="flex justify-center items-center flex-col mt-16">
          <div className="loader"></div>
          <span className="text-white font-medium mt-3 inline-block">
            Dữ liệu đang được cập nhật
          </span>
        </div>
      ) : (
        <>
          {currentItems &&
            currentItems.length >= 0 &&
            currentItems.map((item, index) => (
              <div key={item.id}>
                <h2 className="mb-3 text-xl font-semibold">{item?.title}</h2>
                <div className="flex flex-col gap-y-5 mb-5">
                  <div className="flex flex-col gap-y-1">
                    <div className="h-[300px] max-w-[500px] mx-auto mb-4">
                      <img
                        src={item?.image1}
                        alt=""
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="leading-[1.5] text-slate-900 font-medium italic">
                      {item?.image1_content}
                    </h3>
                  </div>
                  {item?.image2 && (
                    <div className="flex flex-col gap-y-1">
                      <div className="h-[300px] max-w-[500px] mx-auto mb-4">
                        <img
                          src={item?.image2}
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <h3 className="leading-[1.5] text-slate-900 font-medium italic">
                        {item?.image2_content}
                      </h3>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-xl mb-2">Nội dung</h3>
                <AudioPage song={item?.audio} />
                <div
                  className={`relative ${
                    expanded
                      ? "max-h-[400px] overflow-y-auto scrollbar scroll-m-4"
                      : ""
                  }`}
                >
                  <div
                    className={`text-gray-700 leading-[1.5] text-lg font-medium break-words ${
                      expanded ? "" : "line-clamp-4"
                    }`}
                  >
                    {item?.desc.replaceAll("\\n", "\n").replaceAll("\n", "")}
                  </div>
                </div>
                <button
                  onClick={toggleExpand}
                  className="mt-2 mb-3 text-lg text-white hover:underline bg-red-500 px-3 py-2 rounded"
                >
                  {expanded ? "Thu gọn" : "Xem thêm"}
                </button>
              </div>
            ))}

          <ReactPaginate
            className="custom-pagination"
            nextLabel="Next"
            previousLabel="Prev"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            containerClassName="pagination flex justify-center items-center gap-2"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link-next"
            activeClassName="active"
            // disabledClassName="opacity-50 cursor-not-allowed"
            pageClassName="hidden" // Ẩn hết số trang
            breakClassName="hidden" // Ẩn dấu "..."
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default ExhibitionPage;
