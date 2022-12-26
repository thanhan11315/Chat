import React from "react";
import "./dropIcon.scss";
import { LikeOutlined } from "@ant-design/icons";

function DropIcon() {
  return (
    <>
      <div className="box-drop-icon">
        <div className="list-icon">
          <div className="icon">
            <span>👍</span>
          </div>
          <div className="icon">
            <span>❤️</span>
          </div>
          <div className="icon">
            <span>😄</span>
          </div>
          <div className="icon">
            <span>😱</span>
          </div>
          <div className="icon">
            <span>😭</span>
          </div>
          <div className="icon">
            <span>😡</span>
          </div>
        </div>
        <div className="drop-icon">
          <div className="icon">
            <LikeOutlined />
          </div>
        </div>
      </div>
    </>
  );
}

export default DropIcon;
