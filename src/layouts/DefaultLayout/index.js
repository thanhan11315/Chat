import { Col, Row } from "antd";
import {
  MessageOutlined,
  ContainerOutlined,
  CheckSquareOutlined,
  CloudOutlined,
  ToolOutlined,
  SettingOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";
import InPutSearch from "../../components/InPutSearch";
function DefaultLayout({ children }) {
  return (
    <>
      <Row id="wrapper">
        <Col
          // xxl={24}
          // xl={24}
          // lg={24}
          // md={24}
          // sm={24}
          // xs={24}
          className="box-nav-1"
        >
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
                src={SuperShipLogo}
                alt="img not load"
                style={{
                  border: "0.5px solid #fff",
                  borderRadius: "50%",
                  objectFit: "cover",
                  with: "48px",
                  height: "48px",
                  cursor: "pointer",
                }}
              />
            </div>
            <li>
              <MessageOutlined />
            </li>
            <li>
              <ContainerOutlined />
            </li>
            <li>
              <CheckSquareOutlined />
            </li>
          </ul>
          <ul className="list-2">
            <li>
              <CloudOutlined />
            </li>
            <li>
              <ToolOutlined />
            </li>
            <li>
              <SettingOutlined />
            </li>
          </ul>
        </Col>
        <Col className="box-nav-2">
          <Row className="search-add">
            <Col className="search">
              <InPutSearch />
            </Col>
            <Col className="add-friend icon">
              <UserAddOutlined />
            </Col>
            <Col className="create-group icon">
              <UsergroupAddOutlined />
            </Col>
          </Row>
          <Row className="title-nav-2">
            <Row className="box-title-nav2-1">
              <Col className="all title">Tất cả</Col>
              <Col className="not-read title">Chưa đọc</Col>
            </Row>
            <Row className="box-title-nav2-2">
              <Col className="title classify">
                Phân loại
                <DownOutlined
                  style={{
                    marginLeft: "8px",
                  }}
                />
              </Col>
              <Col className="title dots">
                <EllipsisOutlined />
              </Col>
            </Row>
          </Row>
          <div className="box-choose-chatbox">
            <div className="box1">
              <div className="image">image</div>
              <div className="choose-chatbox">
                <div className="title"> Cloud của tôi</div>
                <div className="content">Bạn: icon Hinh Ảnh</div>
              </div>
            </div>
            <div className="box2">icon</div>
          </div>
        </Col>
        <Col className="box-nav-3">
          <div className="box-nav-chat">
            <div className="box-1">
              <div className="image">image</div>
              <div className="box-1-1">
                <div className="title">Tên Chat</div>
                <div className="Status">
                  <div className="Stautus1">19 Thành Viên Icon</div>
                  <div className="div">Gạch</div>
                  <div className="icon">icon</div>
                </div>
              </div>
            </div>
            <div className="box-2">
              <div className="icon-title">
                <ul className="list-icon">
                  <li>icon 1</li>
                  <li>icon 2</li>
                  <li>icon 3</li>
                  <li>icon 4</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-Ghim">
            <div className="box-1">
              <div className="image">image</div>
              <div className="box-1-1">
                <div className="title">tin nhắn</div>\
                <div className="status">
                  <div className="name">Lê Thanh Ân:</div>
                  <div className="content">link</div>
                </div>
              </div>
            </div>
            <div className="box2">2 ghim khác</div>
          </div>
          <div className="box-chat">{children}</div>
          <div className="nav-input-chat">
            <div className="nav-input">
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
              <div>icon</div>
            </div>
            <div className="nav-chat">
              <div className="input-chat">input</div>
              <div className="icon-input">
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
