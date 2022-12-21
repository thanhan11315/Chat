import React from "react";
import "./MenuDotNavright.scss";

function MenuDotNavright(props) {
  const handleClickShare = (value) => {
    props.handleClickShareNavright(value);
  };
  const handleClickSeeOriginalMessage = (value) => {
    const element = document.getElementById("click-find-content-Chat");
    element.click();
    props.handleClickResponsiveValue(value);
  };
  const handleClickDelete = (value) => {
    props.deleteMessage(value);
  };
  return (
    <>
      <a
        href={`#${props.valueHandleClickDotNavright.id}`}
        id="click-find-content-Chat"
        style={{ display: "none" }}
      >
        ewq
      </a>
      <div className="rightmouse-menu-dot-navright">
        <div
          className="select-element"
          onClick={() => handleClickShare(props.valueHandleClickDotNavright)}
        >
          Chia sẻ
        </div>
        <div
          className="select-element"
          onClick={() =>
            handleClickSeeOriginalMessage(props.valueHandleClickDotNavright)
          }
        >
          Xem tin nhắn gốc
        </div>
        <div className="line" />
        <div
          className="select-element"
          style={{ color: "#730e0e" }}
          onClick={() => handleClickDelete(props.valueHandleClickDotNavright)}
        >
          Xóa
        </div>
      </div>
    </>
  );
}

export default MenuDotNavright;
