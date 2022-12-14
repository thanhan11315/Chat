import { Col } from "antd";
import {
  MessageOutlined,
  ContainerOutlined,
  CheckSquareOutlined,
  CloudOutlined,
  ToolOutlined,
  SettingOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";
import "./Nav1.scss";

function Nav1(props) {
  var nagative = useNavigate();
  const logout = () => {
    nagative("/");
    localStorage.setItem("dzzshasddf", JSON.stringify("logout"));
  };
  const text = <span>{props.dataUserMe.name}</span>;
  const content = (
    <>
      <div
        className="popver-nav1"
        onClick={() => props.handleClickImgChat(props.dataUserMe)}
      >
        <p>Hồ sơ của bạn</p>
      </div>
      <div className="popver-nav1" onClick={logout}>
        <p>Đăng Xuất</p>
      </div>
    </>
  );
  const content1 = (
    <div className="box-list-tools">
      <div
        className="box-tool"
        onClick={() => {
          props.setShowTickMessage(true);
        }}
      >
        <div className="icon">
          <StarOutlined />
        </div>
        <div className="content">Tin đánh dấu</div>
      </div>
    </div>
  );
  return (
    <Col className="box-nav-1">
      <ul className="list-1">
        <div
          style={{
            height: "100px",
            paddingTop: "32px",
            alignItems: "flex-start",
            objectFit: "cover",
            textAlign: "center",
          }}
        >
          <Popover
            placement="rightTop"
            title={text}
            content={content}
            trigger="click"
            style={{
              width: "280px",
            }}
          >
            <img
              src={props.dataUserMe.avatar}
              alt="img not load"
              style={{
                border: "0.5px solid #fff",
                borderRadius: "50%",
                objectFit: "cover",
                width: "48px",
                height: "48px",
                cursor: "pointer",
              }}
            />
          </Popover>
        </div>
        <li
          onClick={() => {
            const hiddenBoxNav2 = document.querySelector(".box-nav-2");
            hiddenBoxNav2.classList.remove("hiddenBoxNav2");
            props.setShowTickMessage(false);
          }}
          className="active"
        >
          <MessageOutlined />
        </li>
        <li className="not-use">
          <ContainerOutlined className="not-use" />
        </li>
        <li className="not-use">
          <CheckSquareOutlined className="not-use" />
        </li>
      </ul>
      <ul className="list-2">
        <li className="not-use">
          <CloudOutlined className="not-use" />
        </li>
        <Popover placement="right" content={content1} trigger="click">
          <li>
            <ToolOutlined />
          </li>
        </Popover>
        <li className="not-use">
          <SettingOutlined className="not-use" />
        </li>
      </ul>
    </Col>
  );
}

export default Nav1;
