import { Col } from "antd";
import AvatarAn from "../../../assets/images/AvatarAn.jpg";
import {
  MessageOutlined,
  ContainerOutlined,
  CheckSquareOutlined,
  CloudOutlined,
  ToolOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Nav1.css";

function Nav1(props) {
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
          <img
            src={AvatarAn}
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
        </div>
        <li
          onClick={() => {
            const hiddenBoxNav2 = document.querySelector(".box-nav-2");
            hiddenBoxNav2.classList.remove("hiddenBoxNav2");
          }}
          className="active"
        >
          <MessageOutlined />
        </li>
        <li>
          <ContainerOutlined className="not-use" />
        </li>
        <li>
          <CheckSquareOutlined className="not-use" />
        </li>
      </ul>
      <ul className="list-2">
        <li>
          <CloudOutlined className="not-use" />
        </li>
        <li>
          <ToolOutlined className="not-use" />
        </li>
        <li>
          <SettingOutlined className="not-use" />
        </li>
      </ul>
    </Col>
  );
}

export default Nav1;
