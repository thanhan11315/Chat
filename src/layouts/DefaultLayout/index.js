import { Col, Input, Row } from "antd";
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
  BellOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  TagOutlined,
  UserOutlined,
  SmileOutlined,
  FileImageOutlined,
  RadiusUpleftOutlined,
  ContactsOutlined,
  PaperClipOutlined,
  ClockCircleOutlined,
  ScheduleOutlined,
  FontColorsOutlined,
  ExclamationOutlined,
  DingtalkOutlined,
  CommentOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
// import SuperShipLogo from "../../assets/images/SuperShipLogo.png";
import AvatarAn from "../../assets/images/AvatarAn.jpg";
import InPutSearch from "../../components/InPutSearch";
import { useState } from "react";

const { TextArea } = Input;

function DefaultLayout({ children }) {
  const [focusInput, SetFocusInput] = useState("");

  const data = [];

  for (let i = 0; i < 50; i++) {
    data.push(
      <Row className="box-choose-chatbox">
        <Row className="box1">
          <Col className="image">
            <img
              src={AvatarAn}
              alt="not load img"
              style={{
                border: "0.5px solid #fff",
                borderRadius: "50%",
                objectFit: "cover",
                height: "48px",
                width: "48px",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col className="choose-chatbox">
            <div className="title">
              {" "}
              Đấy là lễ khai giảng tại điểm trường thôn 5 Tu Nấc, Quảng Nam -
              nơi chưa hề có điện và nước sạch. 54 học sinh đồng bào Xơ Đăng
              không quản ngại thiếu thốn vẫn hân hoan chào năm học mới cùng thầy
              cô dù cái ăn còn chưa no bụng.
            </div>
            <div className="content">
              Bạn: Đấy là lễ khai giảng tại điểm trường thôn 5 Tu Nấc, Quảng Nam
              - nơi chưa hề có điện và nước sạch. 54 học sinh đồng bào Xơ Đăng
              không quản ngại thiếu thốn vẫn hân hoan chào năm học mới cùng thầy
              cô dù cái ăn còn chưa no bụng.
            </div>
          </Col>
        </Row>
        <Col className="box2">
          <div className="time-before">
            <BellOutlined />
            14 phút
          </div>
          <div className="icon">
            <EllipsisOutlined />
          </div>
        </Col>
      </Row>
    );
  }

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
          <div className="overflow">
            {data.map((value) => {
              return value;
            })}
          </div>
        </Col>
        <Col className="box-nav-3">
          <Row className="box-nav-chat">
            <Row className="box-1">
              <div className="image">
                <img
                  src={AvatarAn}
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
                <div className="title">
                  Đấy là lễ khai giảng tại điểm trường thôn 5 Tu Nấc, Quảng Nam
                  - nơi chưa hề có điện và nước sạch. 54 học sinh đồng bào Xơ
                  Đăng không quản ngại thiếu thốn vẫn hân hoan chào năm học mới
                  cùng thầy cô dù cái ăn còn chưa no bụng.
                </div>
                <Row className="status">
                  <div className="status-1">
                    <UserOutlined
                      style={{
                        marginRight: "5px",
                      }}
                    />
                  </div>
                  <div className="status-2">19 Thành Viên </div>
                  <div className="brick"></div>
                  <div className="icon">
                    <TagOutlined />
                  </div>
                </Row>
              </div>
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
                <div>
                  <MenuUnfoldOutlined />
                </div>
              </Row>
            </div>
          </Row>
          <Row className="box-ghim">
            <Row className="box-1">
              <div className="image">
                <MessageOutlined />
              </div>
              <div className="box-1-1">
                <div className="title">Tin nhắn</div>
                <div className="status">
                  <div className="content">
                    Lê Thanh Ân: Đấy là lễ khai giảng tại điểm trường thôn 5 Tu
                    Nấc, Quảng Nam - nơi chưa hề có điện và nước sạch. 54 học
                    sinh đồng bào Xơ Đăng không quản ngại thiếu thốn vẫn hân
                    hoan chào năm học mới cùng thầy cô dù cái ăn còn chưa no
                    bụng. s
                  </div>
                </div>
              </div>
            </Row>
            <div className="box-2">
              <div className="ghim">
                2 ghim khác <DownOutlined />{" "}
              </div>
            </div>
          </Row>
          <div className="box-chat">
            {children}
            <div className="me"></div>
            <div className="other-people"></div>
          </div>
          <div className="nav-input-chat">
            <Row className="nav-input">
              <div>
                <SmileOutlined />
              </div>
              <div>
                <FileImageOutlined />
              </div>
              <div>
                <PaperClipOutlined />
              </div>
              <div>
                <RadiusUpleftOutlined />
              </div>
              <div>
                <ContactsOutlined />
              </div>
              <div>
                <ClockCircleOutlined />
              </div>
              <div>
                <ScheduleOutlined />
              </div>
              <div>
                <FontColorsOutlined />
              </div>
              <div>
                <ExclamationOutlined />
              </div>
              <div>
                <EllipsisOutlined />
              </div>
            </Row>
            <Row className={`nav-chat ${focusInput}`}>
              <div className="input-chat">
                <TextArea
                  placeholder=""
                  autoSize={{
                    minRows: 1,
                    maxRows: 6,
                  }}
                  onBlur={() => {
                    SetFocusInput("");
                  }}
                  onFocus={() => {
                    SetFocusInput("focus-input");
                  }}
                />
              </div>
              <Row className="icon-input">
                <div>
                  <CommentOutlined />
                </div>
                <div>
                  <SmileOutlined />
                </div>
                <div>
                  <DingtalkOutlined />
                </div>
                <div>
                  <LikeOutlined />
                </div>
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
