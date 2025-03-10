import { Button, Modal } from "antd";
import React, { useState } from "react";

const ModalApp = ({ open, setOpen, loading, data }) => {
  return (
    <Modal
      className="modal-custom"
      title={<p>Chi tiết giải thưởng</p>}
      footer={<Button type="primary">Đóng</Button>}
      loading={loading}
      open={open}
      onCancel={() => setOpen(false)}
    >
      <p className="text-base font-medium">
        Giấy chứng nhận giải <span className="text-red-500">Nhất</span>,{" "}
        <span className="text-red-500">Nhì</span>,{" "}
        <span className="text-red-500">Ba</span> được ký bởi Bí thư ĐTN HV và
        Chủ tịch HPN HV cùng với phần thưởng từ Ban tổ chức.
      </p>
    </Modal>
  );
};

export default ModalApp;
