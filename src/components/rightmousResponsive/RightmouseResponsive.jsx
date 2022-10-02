import React from "react";
import {
  ExportOutlined,
  PaperClipOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./RightmousResponsive.scss";

function RightmouseResponsive(props) {
  const handleClickShareRightMouse = () => {
    props.setModalShare(true);
  };
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
      <div className="share-responsive" onClick={handleClickShareRightMouse}>
        <ShareAltOutlined style={{ marginRight: "5px" }} /> Chia sẻ
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
