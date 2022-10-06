import React from "react";
import {
  DeleteOutlined,
  ExportOutlined,
  PaperClipOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import "./RightmousResponsive.scss";

function RightmouseResponsive(props) {
  const handleClickShareRightMouse = () => {
    props.setModalShare(true);
    console.log(props.valueResponsiveRightClick);
  };
  return (
    <div className="right-mouse-share-responsive">
      <div
        className="share-responsive"
        onClick={() => {
          props.handleClickResponsiveIcon(props.valueResponsiveRightClick);
        }}
      >
        <ExportOutlined style={{ marginRight: "5px" }} /> Trả lời{" "}
      </div>
      <div className="share-responsive" onClick={handleClickShareRightMouse}>
        <ShareAltOutlined style={{ marginRight: "5px" }} /> Chia sẻ
      </div>
      {props.valueResponsiveRightClick.ghim ? (
        <div
          className="share-responsive"
          onClick={() => {
            props.handleClickUnGhim(props.valueResponsiveRightClick);
          }}
        >
          <PaperClipOutlined style={{ marginRight: "5px" }} /> Bỏ Ghim tin nhắn{" "}
        </div>
      ) : (
        <div
          className="share-responsive"
          onClick={() => {
            props.handleClickGhim(props.valueResponsiveRightClick);
          }}
        >
          <PaperClipOutlined style={{ marginRight: "5px" }} /> Ghim tin nhắn{" "}
        </div>
      )}
      <div
        className="share-responsive delete-message"
        onClick={() => {
          props.deleteMessage(props.valueResponsiveRightClick);
        }}
      >
        <DeleteOutlined style={{ marginRight: "5px" }} /> Xóa tin nhắn{" "}
      </div>
    </div>
  );
}

export default RightmouseResponsive;
