import { Row } from "antd";
import {
  LeftOutlined,
  UserOutlined,
  TagOutlined,
  UsergroupAddOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import React from "react";
import "./NavChatHead.css";

function NavChatHead(props) {
  return (
    <Row className="box-nav-chat">
      <Row>
        <div
          className="button-phone"
          onClick={() => {
            const hiddenBoxNav2 = document.querySelector(".box-nav-2");
            hiddenBoxNav2.classList.remove("hiddenBoxNav2");
          }}
        >
          <LeftOutlined />
        </div>
        <Row className="box-1">
          <div className="image">
            <img
              src={props.headerBoxChat.avatar}
              alt="not load img"
              style={{
                border: "0.5px solid #fff",
                borderRadius: "50%",
                objectFit: "cover",
                width: "48px",
                height: "48px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="box-1-1">
            <div className="title">{props.headerBoxChat.name}</div>
            <Row className="status">
              <div className="status-1">
                <UserOutlined
                  style={{
                    marginRight: "5px",
                  }}
                />
              </div>
              <div className="status-2">{props.headerBoxChat.status}</div>
              <div className="brick"></div>
              <div className="icon">
                <TagOutlined />
              </div>
            </Row>
          </div>
        </Row>
      </Row>
      <div className="box-2">
        <Row className="icon-title">
          <div>
            <UsergroupAddOutlined />
          </div>
          <div>
            <SearchOutlined />
          </div>
          <div>
            <VideoCameraOutlined />
          </div>
          <div onClick={props.navRight}>
            {props.hiddenRightNav ? (
              <MenuFoldOutlined />
            ) : (
              <MenuUnfoldOutlined />
            )}
          </div>
        </Row>
      </div>
    </Row>
  );
}

export default NavChatHead;