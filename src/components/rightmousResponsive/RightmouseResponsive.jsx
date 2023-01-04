import React from "react";
import {
  CopyOutlined,
  UndoOutlined,
  ExportOutlined,
  PaperClipOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  StarOutlined,
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
  const handleClickTickMessage = () => {
    if (props.tickMessage) {
      const isAddedTickMessage = props.tickMessage.some(
        (value) => value.id === props.valueResponsiveRightClick.id
      );
      if (!isAddedTickMessage) {
        const newTickMessage = [
          ...props.tickMessage,
          props.valueResponsiveRightClick,
        ];
        console.log(newTickMessage);
        props.setTickMessage(newTickMessage);
      }
    } else {
      const newTickMessage = [
        {
          ...props.valueResponsiveRightClick,
        },
      ];
      console.log(newTickMessage);
      props.setTickMessage(newTickMessage);
    }
  };
  return (
    <>
      <div
        style={{
          display: `${
            props.valueResponsiveRightClick.evict ? "none" : "block"
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
          <div className="share-responsive" onClick={handleClickTickMessage}>
            <StarOutlined style={{ marginRight: "5px" }} /> Đánh dấu tin nhắn
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
              props.evictMessage(props.valueResponsiveRightClick);
            }}
          >
            <UndoOutlined style={{ marginRight: "5px" }} /> Thu hồi tin nhắn{" "}
          </div>
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
