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
  MenuFoldOutlined,
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
  const [hiddenRightNav, setHiddenRightNav] = useState("hiddenRightNav");

  const navRight = () => {
    if (hiddenRightNav) {
      setHiddenRightNav("");
    } else {
      setHiddenRightNav("hiddenRightNav");
    }
  };

  // demochatlocal

  const [valueChats, setValueChats] = useState([]);
  const [valueChat, setValueChat] = useState("");

  const onChangeChat = (e) => {
    setValueChat(e.target.value);
  };

  const enterChat = () => {
    setValueChat(valueChat);

    if (valueChat.trim() !== "" && valueChat !== null) {
      render(valueChat);
    }
  };

  const render = (valueChatReplace) => {
    setValueChats([valueChatReplace, ...valueChats]);
    console.log([valueChatReplace, ...valueChats]);
    setValueChat("");
  };

  // demo

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
                <div onClick={navRight}>
                  {hiddenRightNav ? (
                    <MenuFoldOutlined />
                  ) : (
                    <MenuUnfoldOutlined />
                  )}
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
            {valueChats.map((value, key) => {
              return (
                <div className="box-me">
                  <div className="me">
                    <div className="img-chat">
                      <img
                        src={AvatarAn}
                        alt="img not load"
                        style={{
                          border: "0.5px solid #fff",
                          borderRadius: "50%",
                          objectFit: "cover",
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <pre className="content-chat" key={key}>
                      {value}
                    </pre>
                  </div>
                </div>
              );
            })}
            <div className="box-other-people">
              <div className="other-people">
                <div className="img-chat">
                  <img
                    src={AvatarAn}
                    alt="img not load"
                    style={{
                      border: "0.5px solid #fff",
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="content-chat">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </div>
              </div>
            </div>
            <div className="box-me">
              <div className="me">
                <div className="img-chat">
                  <img
                    src={AvatarAn}
                    alt="img not load"
                    style={{
                      border: "0.5px solid #fff",
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="content-chat">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </div>
              </div>
            </div>
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
                  onChange={onChangeChat}
                  value={valueChat}
                  placeholder="Nhập tin nhắn"
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
                  onKeyDown={(e) => {
                    if (e.code === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      enterChat();
                    }
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
                  {valueChat.trim() !== "" && valueChat !== null ? (
                    <span
                      className="button-sent"
                      onClick={() => render(valueChat)}
                    >
                      GỬi
                    </span>
                  ) : (
                    <LikeOutlined />
                  )}
                </div>
              </Row>
            </Row>
          </div>
        </Col>
        <Col className={`box-nav-4 ${hiddenRightNav}`}>
          <div className="title-nav">Thông tin hội thoại</div>
          <div className="box-wrapper">
            <div className="box-information">
              <div className="image">
                <img
                  src={AvatarAn}
                  alt="img not load"
                  style={{
                    border: "0.5px solid #fff",
                    borderRadius: "50%",
                    objectFit: "cover",
                    width: "56px",
                    height: "56px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div className="header-info-name">
                <div className="header">Lê Thanh Ân </div>
                <div className="icon">
                  <LikeOutlined />
                </div>
              </div>
              <Row className="box-icon-content">
                <div className="icon-content">
                  <div className="box-icon">
                    <div className="icon">
                      <LikeOutlined />
                    </div>
                  </div>
                  <div className="content">Bật Thông báo</div>
                </div>
                <div className="icon-content">
                  <div className="box-icon">
                    <div className="icon">
                      <LikeOutlined />
                    </div>
                  </div>
                  <div className="content">Bật Thông báo</div>
                </div>
                <div className="icon-content">
                  <div className="box-icon">
                    <div className="icon">
                      <LikeOutlined />
                    </div>
                  </div>
                  <div className="content">Bật Thông báo</div>
                </div>
                <div className="icon-content">
                  <div className="box-icon">
                    <div className="icon">
                      <LikeOutlined />
                    </div>
                  </div>
                  <div className="content">Bật Thông báo</div>
                </div>
              </Row>
            </div>
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
            <div className="test" />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
