import { Drawer } from "antd";
import React from "react";

const DrawerComp = ({ open, setOpen, data, loading }) => {
  return (
    <>
      <Drawer
        closable
        destroyOnClose
        title={<p>Chi tiết thí sinh</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <div>
          <span className="block mb-2 font-medium text-red-400 text-base">
            {data?.id >= 10 ? `MS${data?.id}` : `MS0${data?.id}`}
          </span>
          <div className="h-[200px] w-[200px]">
            <img
              srcSet={`${data?.image} 1x`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-3">
            <h3 className="text-base text-pink-400 font-medium">
              {" "}
              <span className="font-semibold text-black">Tên thí sinh:</span>
              {"   "}
              {data?.name}
            </h3>
            <span className="">
              <span className="font-semibold">Lớp:</span>
              {"   "}
              {data?.class}
            </span>
            <p className="text-base italic">
              {" "}
              <span className="font-semibold text-red-400">Slogan:</span>
              {"    "}
              {data?.desc}
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComp;
