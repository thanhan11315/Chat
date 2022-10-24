import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./InPutSearch.scss";
import React from "react";
function InPutSearch(props) {
  return (
    <div className="InPutSearch">
      <Input
        placeholder="Tìm Kiếm"
        onChange={() => {
          props?.searchFriend();
        }}
        prefix={<SearchOutlined />}
        className="inputSearch"
      />
    </div>
  );
}

export default InPutSearch;
