import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./InPutSearch.css";
import React from "react";

function InPutSearch() {
  return (
    <div id="InPutSearch">
      <Input placeholder="Tìm Kiếm" prefix={<SearchOutlined />} />
    </div>
  );
}

export default InPutSearch;
