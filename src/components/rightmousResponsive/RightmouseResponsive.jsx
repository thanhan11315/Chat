import React from "react";
import {
  CopyOutlined,
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
  const handleClickCopyMessage = (valueResponsiveRightClick) => {
    navigator.clipboard.writeText(valueResponsiveRightClick.text_message);
  };
  return (
    <>
      <div
        style={{
          display: `${
            props.valueResponsiveRightClick.delete ? "none" : "block"
          }`,
        }}
      >
        <div className="right-mouse-share-responsive">
          {props.valueResponsiveRightClick.text_message && (
            <div
              className="share-responsive"
              onClick={() => {
                handleClickCopyMessage(props.valueResponsiveRightClick);
              }}
            >
              <CopyOutlined style={{ marginRight: "5px" }} /> Copy tin nhắn
            </div>
          )}
          {!props.valueResponsiveRightClick.notification_system && (
            <div
              className="share-responsive"
              onClick={() => {
                props.handleClickResponsiveIcon(
                  props.valueResponsiveRightClick
                );
              }}
            >
              <ExportOutlined style={{ marginRight: "5px" }} /> Trả lời{" "}
            </div>
          )}
          <div
            className="share-responsive"
            onClick={handleClickShareRightMouse}
          >
            <ShareAltOutlined style={{ marginRight: "5px" }} /> Chia sẻ
          </div>
          {props.valueResponsiveRightClick.ghim ? (
            <div
              className="share-responsive"
              onClick={() => {
                props.handleClickUnGhim(props.valueResponsiveRightClick);
              }}
            >
              <PaperClipOutlined style={{ marginRight: "5px" }} /> Bỏ Ghim tin
              nhắn{" "}
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
      </div>
    </>
  );
}

export default RightmouseResponsive;
