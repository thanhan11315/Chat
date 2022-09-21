import { Col, Input, Row, Tooltip, Popover } from "antd";
import {
  MessageOutlined,
  DownOutlined,
  EllipsisOutlined,
  MenuUnfoldOutlined,
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
  CaretUpOutlined,
  ShareAltOutlined,
  ExportOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
// compoment
import ResponsiveInput from "../../components/responsiveInput/ResponsiveInput.js";
import ModalInformation from "../../components/modal/Modal.js";
//
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";

import AvatarAn from "../../assets/images/AvatarAn.jpg";
import MicrosoftWord from "../../assets/images/MicrosoftWord.png";
import MicrosoftExcel from "../../assets/images/MicrosoftExcel.png";
import ImagePDF from "../../assets/images/ImagePDF.png";
import ImageZIP from "../../assets/images/ImageZIP.png";
import { useState } from "react";
import RightmouseResponsive from "../../components/rightmousResponsive/RightmouseResponsive";
import Nav1 from "./nav1/Nav1";
import Nav2 from "./nav2/Nav2";
import NavChatHead from "../../components/navChatHead/NavChatHead";
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
        Responsive: ResponsiveInputValue,
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
        Responsive: ResponsiveInputValue,
        content: valueChatReplace,
        ...date,
      },
      ...valueChats,
    ]);
    setValueChat("");
    setResponsiveInputValue("");
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

  const [ResponsiveInputValue, setResponsiveInputValue] = useState("");
  const [valueResponsiveRightClick, setValueResponsiveRightClick] =
    useState("");

  const onClickResponsiveIcon = (value) => {
    console.log(value);
    setResponsiveInputValue(value);
    document.querySelector(".input-chat .ant-input").focus();
  };

  const clearResponsiveTnputValue = () => {
    setResponsiveInputValue("");
    document.querySelector(".input-chat .ant-input").focus();
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
  window.addEventListener("click", () => {
    document.querySelector(".right-mouse-share-responsive ").style.display =
      "none";
  });

  window.addEventListener("wheel", () => {
    document.querySelector(".right-mouse-share-responsive ").style.display =
      "none";
  });

  window.addEventListener("contextmenu", () => {
    document.querySelector(".right-mouse-share-responsive ").style.display =
      "none";
  });

  window.addEventListener("keydown", () => {
    document.querySelector(".input-chat .ant-input").focus();
  });

  if (document.getElementById("InPutSearch")) {
    document.getElementById("InPutSearch").addEventListener("keydown", (e) => {
      e.stopPropagation();
    });
  }

  const handleOnContextMenu = (e) => {
    e.preventDefault();
    const menu = document.querySelector(".right-mouse-share-responsive");
    menu.style.display = "block";
    menu.style.top = `${e.clientY - 10}px`;
    menu.style.left = `${e.clientX - 10}px`;
    e.stopPropagation();
  };

  return (
    <>
      {/* Modal */}
      <ModalInformation
        modalInformation={modalInformation}
        handleCancelModalInformation={handleCancelModalInformation}
      />
      {/* Modal*/}

      {/* RightmouseResponsive */}
      <RightmouseResponsive
        onClickResponsiveIcon={onClickResponsiveIcon}
        valueResponsiveRightClick={valueResponsiveRightClick}
      />
      {/* RightmouseResponsive */}

      <Row id="wrapper">
        {/* Nav1 */}
        <Nav1 />
        {/* Nav1 */}

        {/* Nav2 */}
        <Nav2
          onClickAllTitle={onClickAllTitle}
          onClickNotReadTitle={onClickNotReadTitle}
          dataBoxChat={dataBoxChat}
          onClickChooseBoxChat={onClickChooseBoxChat}
        />
        {/* Nav2 */}

        <Col className="box-nav-3">
          {/* NavChatHead */}
          <NavChatHead
            headerBoxChat={headerBoxChat}
            navRight={navRight}
            hiddenRightNav={hiddenRightNav}
          />
          {/* NavChatHead */}
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
                        onClick={() => onClickResponsiveIcon(value)}
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
                    <div
                      className="box-content-all-chat"
                      onContextMenu={(e) => {
                        handleOnContextMenu(e);
                        setValueResponsiveRightClick(value);
                      }}
                    >
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
                          <div className="content-chat" key={key}>
                            {value.Responsive ? (
                              <ResponsiveInput
                                ResponsiveInputValue={value.Responsive}
                                clearResponsiveTnputValue={
                                  clearResponsiveTnputValue
                                }
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
                          </div>
                        </>
                      )}
                    </div>
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
              {/* Responsive-input */}

              {ResponsiveInputValue ? (
                <ResponsiveInput
                  ResponsiveInputValue={ResponsiveInputValue}
                  clearResponsiveTnputValue={clearResponsiveTnputValue}
                  renderImageFile={renderImageFile}
                />
              ) : (
                ""
              )}

              {/* Responsive-input */}

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
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DefaultLayout;
