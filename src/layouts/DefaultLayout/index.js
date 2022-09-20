import { Col, Input, Row, Tooltip, Popover, Modal } from "antd";
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
  FileImageOutlined,
  FileOutlined,
  FolderOutlined,
  LeftOutlined,
  CaretUpOutlined,
  ShareAltOutlined,
  ExportOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
// compoment
import InPutSearch from "../../components/inPutSearch/InPutSearch";
import AnswerInput from "../../components/answerInput/Answerinput";
//
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";

import AvatarAn from "../../assets/images/AvatarAn.jpg";
import MicrosoftWord from "../../assets/images/MicrosoftWord.png";
import MicrosoftExcel from "../../assets/images/MicrosoftExcel.png";
import ImagePDF from "../../assets/images/ImagePDF.png";
import ImageZIP from "../../assets/images/ImageZIP.png";
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
  const [valueChat, setValueChat] = useState(``);

  const onChangeChat = (e) => {
    setValueChat(e.target.value);
  };

  const enterChat = () => {
    if (valueChat.trim() !== "" && valueChat !== null) {
      render(valueChat);
    }
  };

  const d = new Date();
  const date = {
    year: d.getFullYear(),
    month: d.getMonth(),
    date: d.getDate(),
    hours: d.getHours(),
    minutes: d.getMinutes(),
  };

  const render = (valueChatReplace) => {
    setValueChats([
      {
        answer: answerInputValue,
        content: valueChatReplace,
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
      },
      ...valueChats,
    ]);
    console.log([
      {
        answer: answerInputValue,
        content: valueChatReplace,
        ...date,
      },
      ...valueChats,
    ]);
    setValueChat("");
    setanswerInputValue("");
  };

  const onChangeImage = (e) => {
    setValueChats([
      {
        type: e.target.files[0].type.slice(0, 5),
        url: URL.createObjectURL(e.target.files[0]),
        ...date,
      },
      ...valueChats,
    ]);
  };

  const onChangeFile = (e) => {
    setValueChats([{ file: e.target.files[0], ...date }, ...valueChats]);
  };

  const content = (
    <div
      style={{
        position: "absolute",
        borderRadius: "4px",
        width: "210px",
        height: "82px",
        padding: "8px",
        backgroundColor: "var(--WA100)",
        left: "0px",
        top: "-225%",
      }}
    >
      <div
        className="chooseFile"
        onClick={() => {
          const uploadFile = document.querySelector(".uploadFile");
          uploadFile.click();
        }}
      >
        <FileOutlined style={{ marginRight: "5px" }} />
        Chọn File
        <input
          className="uploadFile"
          type="file"
          onChange={(e) => onChangeFile(e)}
          style={{
            display: "none",
          }}
        />
      </div>
      <div className="chooseFolder">
        <FolderOutlined style={{ marginRight: "5px" }} /> Chọn thư mục
      </div>
    </div>
  );

  const onClickIcon = (e) => {
    setValueChat(`${valueChat} ${e}`);
    document.querySelector(".input-chat .ant-input").focus();
  };

  const iconRender = [
    "😘",
    "🙂",
    "😀",
    "😄",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😌",
    "😉",
    "😏",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🤗",
    "😳",
    "🙃",
    "😇",
    "😈",
    "😛",
    "😝",
    "😜",
    "😋",
    "🤤",
    "🤓",
    "😎",
    "🤑",
    "😒",
    "🙁",
    "😞",
    "😔",
    "😖",
    "😓",
    "😢",
    "😢",
    "😭",
    "😟",
    "😣",
    "😩",
    "😫",
    "😕",
    "🤔",
    "🙄",
    "😤",
    "😠",
    "😡",
    "🤐",
    "😯",
    "😲",
    "😧",
    "😨",
    "😱",
    "😴",
    "👍",
    "👎",
    "✌️",
    "👌",
    "👋",
    "❤️",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "💖",
    "💝",
    "💔",
    "❣️",
    "💕",
  ];

  const contentIcon = (
    <div className="box-choose-icon">
      {iconRender.map((value, key) => {
        return (
          <div
            className="choose-icon"
            key={key}
            style={{ fontSize: "22px" }}
            onClick={() => onClickIcon(value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );

  // demo

  //

  const dataBoxChat = [
    {
      id: "1",
      name: "Thanh Ân",
      message: "Thanh Ân Thanh Ân Thanh Ân",
      avatar: AvatarAn,
      status: "Vừa truy cập",
      ghim: [
        {
          name: "Lê Thanh Ân",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          name: "Lê Thanh Ân",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          name: "Lê Thanh Ân",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          name: "Lê Thanh Ân",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
      valueChatStore: [
        {
          me: {
            type: "text",
            message: "Node.js Email - W3Schools",
          },
        },
        {
          otherPeople: {
            type: "text",
            message: "Node.js Email - W3Schools",
          },
        },
        {
          me: {
            type: "picture",
            url: AvatarAn,
          },
        },
        {
          otherPeople: {
            type: "picture",
            url: AvatarAn,
          },
        },
        {
          me: {
            type: "video",
            url: AvatarAn,
          },
        },
        {
          otherPeople: {
            type: "video",
            url: AvatarAn,
          },
        },
        {
          me: {
            type: "file",
            url: AvatarAn,
          },
        },
        {
          otherPeople: {
            type: "file",
            url: AvatarAn,
          },
        },
      ],
    },
    {
      id: "2",
      name: "SuperShip",
      message: "SuperShip SuperShip SuperShip SuperShip",
      avatar: SuperShipLogo,
      status: "Vừa truy cập",
      ghim: [
        {
          name: "Nguyễn Văn Hóa",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
        {
          name: "Nguyễn Văn Hóa",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
    },
    {
      id: "3",
      name: "Nhóm Chat",
      message: "Nhóm Chat Nhóm Chat Nhóm Chat",
      avatar: MicrosoftExcel,
      status: "16 thành viên",
      ghim: [
        {
          name: "Nguyễn Văn Thành Viên",
          content: "Lorem Ipsum is simply dummy text of the printing",
        },
      ],
    },
    {
      id: "4",
      name: "Nhóm Chat",
      message: "Nhóm Chat Nhóm Chat Nhóm Chat",
      avatar: MicrosoftExcel,
      status: "106 thành viên",
    },
  ];

  const [headerBoxChat, setHeaderBoxChat] = useState(dataBoxChat[0]);

  const onClickChooseBoxChat = (value) => {
    const hiddenBoxNav2 = document.querySelector(".box-nav-2");
    hiddenBoxNav2.classList.add("hiddenBoxNav2");
    if (document.querySelector(".box-ghim-1")) {
      document.querySelector(".box-ghim-1").style.display = "block";
    }
    if (document.querySelector(".box-ghim-2")) {
      document.querySelector(".box-ghim-2").style.display = "none";
    }
    setHeaderBoxChat(value);
    console.log(value);
  };

  const lengthghim = headerBoxChat?.ghim?.length;

  const onMounseOverBox = (key) => {
    document.querySelector(`.share-response-${key}`).style.display = "flex";
  };

  const onMouseOutBox = (key) => {
    document.querySelector(`.share-response-${key}`).style.display = "none";
  };

  const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  };

  const renderImageFile = (value) => {
    switch (value.substr(-4)) {
      case "xlsx":
        return MicrosoftExcel;
      case "docx":
        return MicrosoftWord;
      case ".pdf":
        return ImagePDF;
      case ".zip":
        return ImageZIP;
      default:
        return AvatarAn;
    }
  };
  const onClickAllTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.add("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.remove("selected");
    document.querySelector(
      ".box-choose-chatbox .box2 .number-unread"
    ).style.visibility = "hidden";
    const arrayList = document.querySelectorAll(".number-unread");
    if (arrayList) {
      for (let x = 0; x < arrayList.length; x++) {
        arrayList[x].style.visibility = "hidden";
      }
    }
  };

  const onClickNotReadTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.remove("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.add("selected");
    const arrayList = document.querySelectorAll(".number-unread");
    if (arrayList) {
      for (let x = 0; x < arrayList.length; x++) {
        arrayList[x].style.visibility = "visible";
      }
    }
  };

  const [answerInputValue, setanswerInputValue] = useState("");

  const onClickAnswerIcon = (value) => {
    console.log(value);
    setanswerInputValue(value);
    document.querySelector(".input-chat .ant-input").focus();
  };

  const clearAnswerTnputValue = () => {
    setanswerInputValue("");
    console.log("1");
  };

  const onClickRightMouse = (e, value, key) => {
    e.preventDefault();
    let targetEl = e.target;
    console.log(targetEl);
    const flyoutEl = document.querySelector(
      `.right-mouse-share-responsive-${key}`
    );
    console.log(flyoutEl);
    console.log(targetEl === flyoutEl);
  };

  // Modal

  const [modalInformation, setModalInformation] = useState(false);
  const handleCancelModalInformation = () => {
    setModalInformation(false);
  };
  const handleClickImgChat = () => {
    setModalInformation(true);
    setTimeout(() => {
      document.querySelector(".ant-modal").style.width = "352px";
    }, 1);
  };
  // Modal

  // rendercontent

  // rendercontent

  return (
    <>
      {/* Modal */}
      <Modal
        open={modalInformation}
        title="Thông tin tài khoản"
        onCancel={handleCancelModalInformation}
        footer={[]}
      >
        <div className="wrapper-modal-information">
          <div className="profilePhoto">
            <div className="avatar-profile">
              <img className="img-profile" alt="not load img" src={AvatarAn} />
            </div>
            <div className="user-profile-preview">
              <div className="box-img-avatar">
                <img className="img-avatar" alt="not load img" src={AvatarAn} />
              </div>
              <div className="preview-content">
                <div className="name-content">Lê Thanh Ân</div>
              </div>
            </div>
          </div>
          <div className="box-btn-sentmgs">
            <div className="btn-sentmgs">Nhắn tin</div>
          </div>
          <div className="box-profile-information">
            <div className="header-profile-detail">Thông tin cá nhân</div>
            <div className="box-user-profile-detail">
              <div className="user-profile-detail">
                <span className="title-profile-detail">Điện Thoại</span>
                <span className="content-profile-detail"> 0898999907 </span>
              </div>
              <div className="user-profile-detail">
                <span className="title-profile-detail">Giới Tính</span>
                <span className="content-profile-detail"> Nam </span>
              </div>
              <div className="user-profile-detail">
                <span className="title-profile-detail">Ngày Sinh</span>
                <span className="content-profile-detail"> 22/02/2022 </span>
              </div>
            </div>
          </div>
          <div className="box-profile-action"></div>
        </div>
      </Modal>

      {/* Modal */}
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
        <Col className="box-nav-2 box-nav-2-mobile">
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
              <Col className="all title selected" onClick={onClickAllTitle}>
                Tất cả
              </Col>
              <Col className="not-read title" onClick={onClickNotReadTitle}>
                Chưa đọc
              </Col>
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
            {dataBoxChat.map((value, key) => {
              return (
                <Row
                  className="box-choose-chatbox"
                  onClick={() => onClickChooseBoxChat(value)}
                  key={key}
                >
                  <Row className="box1">
                    <Col className="image">
                      <img
                        src={value.avatar}
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
                      <div className="title">{value.name}</div>
                      <div className="content">{value.message}</div>
                    </Col>
                  </Row>
                  <Col className="box2">
                    <div className="time-before" onClick={() => {}}>
                      <BellOutlined />
                      14 phút
                    </div>
                    <div className="number-unread">
                      <div>
                        <div>5+</div>
                      </div>
                    </div>
                  </Col>
                  <Col className="box3">
                    <div className="icon">
                      <EllipsisOutlined />
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Col>
        <Col className="box-nav-3">
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
                    src={headerBoxChat.avatar}
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
                  <div className="title">{headerBoxChat.name}</div>
                  <Row className="status">
                    <div className="status-1">
                      <UserOutlined
                        style={{
                          marginRight: "5px",
                        }}
                      />
                    </div>
                    <div className="status-2">{headerBoxChat.status}</div>
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
          {lengthghim ? (
            <>
              <div className="box-ghim-1">
                <Row className="box-ghim">
                  <Row className="box-1">
                    <div className="image">
                      <MessageOutlined />
                    </div>
                    <div className="box-1-1">
                      <div className="title">Tin nhắn</div>
                      <div className="status">
                        <div className="content">
                          {`${headerBoxChat.ghim[lengthghim - 1].name}: ${
                            headerBoxChat.ghim[lengthghim - 1].content
                          }`}
                        </div>
                      </div>
                    </div>
                  </Row>
                  {lengthghim > 1 ? (
                    <div className="box-2">
                      <div
                        className="ghim"
                        onClick={() => {
                          document.querySelector(".box-ghim-1").style.display =
                            "none";
                          document.querySelector(".box-ghim-2").style.display =
                            "block";
                        }}
                      >
                        {lengthghim - 1} ghim khác <DownOutlined />{" "}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Row>
              </div>
              {lengthghim > 1 ? (
                <div className="box-ghim-2">
                  <Row className="list-ghim">
                    <div className="list">Danh sách ghim ({lengthghim})</div>
                    <div
                      className="collapse"
                      onClick={() => {
                        document.querySelector(".box-ghim-1").style.display =
                          "block";
                        document.querySelector(".box-ghim-2").style.display =
                          "none";
                      }}
                    >
                      Thu Gọn <CaretUpOutlined />
                    </div>
                  </Row>
                  {headerBoxChat.ghim.map((value, key) => {
                    return (
                      <Row className="box-ghim">
                        <Row className="box-1">
                          <div className="image">
                            <MessageOutlined />
                          </div>
                          <div className="box-1-1">
                            <div className="title">Tin nhắn</div>
                            <div className="status">
                              <div className="content">
                                {`${value.name} : ${value.content}`}
                              </div>
                            </div>
                          </div>
                        </Row>
                      </Row>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          <div className="box-chat">
            {children}
            {valueChats.map((value, key) => {
              return (
                <div
                  className="box-me"
                  onMouseOver={() => onMounseOverBox(key)}
                  onMouseOut={() => onMouseOutBox(key)}
                >
                  <Row className={`share-response share-response-${key}`}>
                    <div>
                      <ExportOutlined
                        onClick={() => onClickAnswerIcon(value)}
                      />
                    </div>
                    <div>
                      <ShareAltOutlined />
                    </div>
                  </Row>
                  <div className="me">
                    <div className="img-chat">
                      <img
                        src={AvatarAn}
                        alt="img not load"
                        onClick={handleClickImgChat}
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
                    {value.url ? (
                      <div className="hover-image-chat">
                        {value.type === "video" ? (
                          <video
                            controls
                            src={value.url}
                            alt="video not load"
                            style={{
                              objectFit: "cover",
                              maxHeight: "390px",
                              cursor: "pointer",
                              marginBottom: "8px",
                              borderRadius: "10px",
                            }}
                          />
                        ) : (
                          <>
                            <img
                              src={value.url}
                              alt="img not load"
                              style={{
                                objectFit: "cover",
                                maxHeight: "390px",
                                cursor: "pointer",
                                marginBottom: "8px",
                                borderRadius: "10px",
                              }}
                            />
                          </>
                        )}
                        <div className="date">
                          {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
                          {value.hours}:{value.minutes}
                        </div>
                      </div>
                    ) : value.file ? (
                      <div className="box-file">
                        <Row className="box-content-file">
                          <div className="img-file">
                            <img
                              src={renderImageFile(value.file?.name)}
                              alt="img not load"
                              style={{
                                marginRight: "10px",
                                height: "56px",
                                borderRadius: "3px",
                              }}
                            />
                          </div>
                          <div className="box-content-file-title">
                            <div className="content-file-title">
                              {value.file?.name}
                            </div>
                            <Row className="box-information">
                              <div className="file-size">
                                {bytesToSize(value.file?.size)}
                              </div>
                              <div className="icon-download">
                                <DownloadOutlined />
                              </div>
                            </Row>
                          </div>
                        </Row>
                        <div className="date">
                          <div>
                            {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
                            {value.hours}:{value.minutes}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div
                          className="content-chat"
                          key={key}
                          onContextMenu={(e) => {
                            onClickRightMouse(e, value, key);
                          }}
                        >
                          {value.answer ? (
                            <AnswerInput
                              answerInputValue={value.answer}
                              clearAnswerTnputValue={clearAnswerTnputValue}
                              renderImageFile={renderImageFile}
                            />
                          ) : (
                            ""
                          )}
                          {value.content}
                          <div className="date">
                            {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
                            {value.hours}:{value.minutes}
                          </div>
                          <div
                            className={`right-mouse-share-responsive right-mouse-share-responsive-${key}`}
                          >
                            <div className="share-responsive"> Trả lời </div>
                            <div className="share-responsive"> Chia sẻ </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="box-date">
              <div className="line" />
              <span className="overdate">
                {" "}
                {date.date}-{date.month + 1}-{date.year} {date.hours}:
                {date.minutes}
              </span>
              <div className="line" />
            </div>
            <Row className="box-message">
              <Row className="event-message">
                <Col className="image-message">
                  <img
                    src={AvatarAn}
                    alt="img not load"
                    style={{
                      border: "0.5px solid #fff",
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  />
                </Col>
                <Col className="name-message">Lê Thanh Ân</Col>
                <Col className="content-message">được</Col>
                <Col className="name-message">Lê Thanh Ân</Col>
                <Col className="content-message">thêm vào nhóm</Col>
              </Row>
            </Row>
            <Row className="box-message">
              <Row className="event-message">
                <Col className="image-message">
                  <img
                    src={AvatarAn}
                    alt="img not load"
                    style={{
                      border: "0.5px solid #fff",
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  />
                </Col>
                <Col className="name-message">Lê Thanh Ân</Col>
                <Col className="content-message">đã rời khỏi nhóm</Col>
              </Row>
            </Row>
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
                <img
                  src={AvatarAn}
                  alt="img not load"
                  style={{
                    objectFit: "cover",
                    maxHeight: "390px",
                    cursor: "pointer",
                    marginBottom: "8px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="nav-input-chat">
            <Row className="nav-input">
              <Popover
                placement="topLeft"
                content={contentIcon}
                trigger="click"
              >
                <Tooltip placement="leftBottom" title="Gửi Icon">
                  <div>
                    <SmileOutlined />
                  </div>
                </Tooltip>
              </Popover>
              <Tooltip placement="leftBottom" title="Gửi hình ảnh/video">
                <div
                  onClick={() => {
                    const uploadImage = document.querySelector(".uploadImage");
                    uploadImage.click();
                  }}
                >
                  <FileImageOutlined />
                  <input
                    className="uploadImage"
                    type="file"
                    accept="audio/*,video/*,image/*"
                    onChange={(e) => {
                      onChangeImage(e);
                    }}
                    style={{
                      display: "none",
                    }}
                  />
                </div>
              </Tooltip>
              <Popover placement="topLeft" content={content} trigger="click">
                <Tooltip placement="leftBottom" title="Đính kèm File">
                  <div>
                    <PaperClipOutlined />
                  </div>
                </Tooltip>
              </Popover>
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
            <div className={`nav-chat ${focusInput}`}>
              {/* answer-input */}

              {answerInputValue ? (
                <AnswerInput
                  answerInputValue={answerInputValue}
                  clearAnswerTnputValue={clearAnswerTnputValue}
                  renderImageFile={renderImageFile}
                />
              ) : (
                ""
              )}

              {/* answer-input */}

              <Row>
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
          </div>
        </Col>
        <Col className={`box-nav-4 ${hiddenRightNav}`}>
          <div className="title-nav">
            <div onClick={navRight}>
              {hiddenRightNav ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
            Thông tin hội thoại
          </div>
          <div className="box-wrapper">
            <div className="box-information">
              <div className="image">
                <img
                  src={headerBoxChat.avatar}
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
                <div className="header">{headerBoxChat.name}</div>
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
