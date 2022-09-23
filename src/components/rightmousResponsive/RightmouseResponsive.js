import React from "react";
import { ExportOutlined, ShareAltOutlined } from "@ant-design/icons";
import "./RightmousResponsive.css";

function RightmouseResponsive(props) {
  return (
    <div className="right-mouse-share-responsive">
      <div
        className="share-responsive"
        onClick={() => {
          props.onClickResponsiveIcon(props.valueResponsiveRightClick);
        }}
      >
        <ExportOutlined style={{ marginRight: "5px" }} /> Trả lờin
      </div>
      <div className="share-responsive">
        <ShareAltOutlined style={{ marginRight: "5px" }} /> Chia sẻ{" "}
      </div>
    </div>
  );
}

export default RightmouseResponsive;
