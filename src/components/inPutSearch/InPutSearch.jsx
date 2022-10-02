import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./InPutSearch.scss";
import React from "react";
function InPutSearch() {
  return (
    <div className="InPutSearch">
      <Input placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
    </div>
  );
}

export default InPutSearch;
