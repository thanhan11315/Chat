import React from "react";
import {
  ExportOutlined,
  PaperClipOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./RightmousResponsive.css";

function RightmouseResponsive(props) {
  return (
    <div className="right-mouse-share-responsive">
      <div
        className="share-responsive"
        onClick={() => {
          props.handleClickResponsiveIcon(props.valueResponsiveRightClick);
        }}
      >
        <ExportOutlined style={{ marginRight: "5px" }} /> Trả lời
      </div>
      <div className="share-responsive">
        <ShareAltOutlined style={{ marginRight: "5px" }} /> Chia sẻ{" "}
      </div>
      <div
        className="share-responsive"
        onClick={() => {
          props.handleClickGhim(props.valueResponsiveRightClick);
        }}
      >
        <PaperClipOutlined style={{ marginRight: "5px" }} /> Ghim tin nhắn{" "}
      </div>
    </div>
  );
}

export default RightmouseResponsive;
