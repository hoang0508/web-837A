import { Button, Modal } from "antd";
import React, { useState } from "react";

const ModalApp = ({ open, setOpen, loading, data }) => {
  return (
    <Modal
      className="modal-custom"
      title={<p>Lời chúc 8-3 dành cho các cô và các bạn nữ trong học viện</p>}
      footer={<Button type="primary">Đóng</Button>}
      loading={loading}
      open={open}
      onCancel={() => setOpen(false)}
    >
      {/* {data &&
        data.length >= 0 &&
        data.map((item) => (
          <>
            <div className="modal-custom--content">
              <span>cdc</span>
              <p>{item[1]}</p>
            </div>
          </>
        ))} */}
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
      <p>jcndjcn</p>
    </Modal>
  );
};

export default ModalApp;
