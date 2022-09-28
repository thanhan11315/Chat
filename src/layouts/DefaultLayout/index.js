import { Col, Input, Row, Tooltip, Popover } from "antd";
import {
  EllipsisOutlined,
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
  FileImageOutlined,
  FileOutlined,
  FolderOutlined,
  CaretUpOutlined,
  ShareAltOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// compoment
import ResponsiveInput from "../../components/responsiveInput/ResponsiveInput.js";
import ModalInformation from "../../components/modal/Modal.js";
import Nav1 from "./nav1/Nav1";
import Nav2 from "./nav2/Nav2";
import NavChatHead from "../../components/navChatHead/NavChatHead";
import RenderFile from "../../components/file/RenderFile";
import ImageOrVideo from "../../components/imageOrVideo/ImageOrVideo";
import ListGhim from "../../components/listGhim/ListGhim";
import Ghim from "../../components/listGhim/Ghim";
import Nav4 from "./nav4/Nav4";
//
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";

import AvatarAn from "../../assets/images/AvatarAn.jpg";
import MicrosoftWord from "../../assets/images/MicrosoftWord.png";
import MicrosoftExcel from "../../assets/images/MicrosoftExcel.png";
import ImagePDF from "../../assets/images/ImagePDF.png";
import ImageZIP from "../../assets/images/ImageZIP.png";
import { useState } from "react";
import RightmouseResponsive from "../../components/rightmousResponsive/RightmouseResponsive";

const { TextArea } = Input;
function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const refreshPage = () => {
    const getLocalUsername = JSON.parse(localStorage.getItem("dzzshasddf"));
    console.log(getLocalUsername);
    if (getLocalUsername === "zndkeadeeqwrmf") {
      navigate("/chat");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    refreshPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [focusInput, SetFocusInput] = useState("");
  const [hiddenRightNav, setHiddenRightNav] = useState("hiddenRightNav");

  const handleClickNavRight = (e) => {
    if (hiddenRightNav) {
      setHiddenRightNav("");
    } else {
      setHiddenRightNav("hiddenRightNav");
    }
    if (window.innerWidth < 993) {
      e.stopPropagation();
    }
  };

  // demochatlocal

  const valueChatDemo = [
    {
      id: 3213213213132131,
      content: "Tin nhắn text",
      name: "Thanh Ân",
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
    },
    {
      id: 3234243546546565,
      content: "Tin nhắn text",
      name: "Thanh Ân",
      other_people: true,
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      ghim: false,
    },
    {
      id: 321321653784387,
      content: "thanh an",
      name: "Thanh Ân",
      date: 24,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: AvatarAn,
      type: "image",
      ghim: false,
    },
    {
      id: 321321434321321,
      content: "thanh an",
      name: "Thanh Ân",
      date: 24,
      other_people: true,
      hours: 13,
      minutes: 39,
      month: 8,
      year: 2022,
      url: AvatarAn,
      type: "image",
      ghim: false,
    },
  ];

  const [valueChats, setValueChats] = useState(valueChatDemo);
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

  const id = `${Date.now()}${Math.floor(Math.random() * 1000000000000)}`;

  const render = (valueChatReplace) => {
    setValueChats([
      {
        other_people: true,
        ghim: false,
        id: id,
        Responsive: ResponsiveInputValue,
        content: valueChatReplace,
        name: "Thanh Ân",
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
        content: e.target.files[0].name,
        name: "Thanh Ân",
        other_people: true,
        ...date,
      },
      ...valueChats,
    ]);
  };

  const onChangeFile = (e) => {
    setValueChats([
      {
        file: e.target.files[0],
        content: e.target.files[0].name,
        name: "Thanh Ân",
        other_people: true,
        ...date,
      },
      ...valueChats,
    ]);
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

  const handleClickIcon = (e) => {
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
            onClick={() => handleClickIcon(value)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );

  // demo

  // Ghim

  const [valueListGhim, setValueListGhim] = useState("");

  const handleClickGhim = (valueGhim) => {
    const newValueChats = valueChats.map((value) => {
      if (value.id === valueGhim.id) {
        return { ...value, ghim: true };
      } else {
        return value;
      }
    });
    setValueChats(newValueChats);
    setValueListGhim(
      newValueChats.filter((value) => {
        return value.ghim === true;
      })
    );
  };
  const lengthGhim = valueListGhim?.length;
  const dataBoxChatApi = [
    {
      id: "1",
      name: "Thanh Ân",
      message: "Ân Lê",
      avatar: AvatarAn,
      status: "Vừa truy cập",
      not_read: true,
    },
    {
      id: "2",
      name: "SuperShip",
      message: "SuperShip SuperShip SuperShip SuperShip",
      avatar: SuperShipLogo,
      status: "Vừa truy cập",
    },
    {
      id: "3",
      name: "Nhóm Chat",
      message: "Nhóm Chat Nhóm Chat Nhóm Chat",
      avatar: MicrosoftExcel,
      not_read: true,
      status: "16 thành viên",
    },
    {
      id: "4",
      name: "Nhóm Chat",
      message: "Nhóm Chat Nhóm Chat Nhóm Chat",
      avatar: MicrosoftExcel,
      status: "106 thành viên",
    },
  ];
  const [dataBoxChat, setDataBoxChat] = useState(dataBoxChatApi);
  const [headerBoxChat, setHeaderBoxChat] = useState(dataBoxChat[0]);
  const chooseBackground = () => {
    if (document.querySelector(`.box-choose-chatbox-${dataBoxChat[0].id}`)) {
      document.querySelector(
        `.box-choose-chatbox-${dataBoxChat[0].id}`
      ).style.backgroundColor = "#eeeff2";
    }
  };

  useEffect(() => {
    chooseBackground();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickChooseBoxChat = (value) => {
    const hiddenBoxNav2 = document.querySelector(".box-nav-2");
    hiddenBoxNav2.classList.add("hiddenBoxNav2");
    if (document.querySelector(".box-ghim-1")) {
      document.querySelector(".box-ghim-1").style.display = "block";
    }
    if (document.querySelector(".box-ghim-2")) {
      document.querySelector(".box-ghim-2").style.display = "none";
    }
    setHeaderBoxChat(value);
    const newdataBoxChat = dataBoxChat.map((valueN) => {
      if (valueN.id === value.id) {
        return { ...valueN, not_read: false };
      } else {
        return valueN;
      }
    });

    dataBoxChat.forEach((value) => {
      document.querySelector(
        `.box-choose-chatbox-${value.id}`
      ).style.backgroundColor = "#fff";
    });

    document.querySelector(
      `.box-choose-chatbox-${value.id}`
    ).style.backgroundColor = "#eeeff2";
    setDataBoxChat(newdataBoxChat);
  };

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

  const [dataBoxChatRender, setDataBoxChatRender] = useState(dataBoxChatApi);

  const handleClickAllTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.add("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.remove("selected");
    setDataBoxChatRender(dataBoxChat);
  };

  const handleClickNotReadTitle = () => {
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .all")
      .classList.remove("selected");
    document
      .querySelector("#wrapper .box-nav-2 .title-nav-2 .not-read")
      .classList.add("selected");
    setDataBoxChatRender(
      dataBoxChat.filter((value) => value.not_read === true)
    );
  };

  const [ResponsiveInputValue, setResponsiveInputValue] = useState("");
  const [valueRightClickMessage, setValueReRightClickMessage] = useState("");

  const handleClickResponsiveIcon = (value) => {
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

  //

  // Right nav bar media 992px

  window.addEventListener("click", () => {
    if (window.innerWidth < 993) {
      setHiddenRightNav("hiddenRightNav");
    }
  });

  if (document.querySelector(".box-nav-4") && window.innerWidth < 993) {
    document.querySelector(".box-nav-4").addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
  // Right nav bar media 992px

  // right mouse and forcus input

  window.addEventListener("click", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
  });

  window.addEventListener("wheel", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
  });

  window.addEventListener("contextmenu", () => {
    if (document.querySelector(".right-mouse-share-responsive ")) {
      document.querySelector(".right-mouse-share-responsive ").style.display =
        "none";
    }
  });

  window.addEventListener("keydown", () => {
    document.querySelector(".input-chat .ant-input").focus();
  });

  if (document.getElementById("InPutSearch")) {
    document.getElementById("InPutSearch").addEventListener("keydown", (e) => {
      e.stopPropagation();
    });
  }

  // right mouse and forcus input

  // contextMenu Click Right mouse

  const handleOnContextMenu = (e) => {
    let leftPos = "";
    let topPos = "";
    if (!document.querySelector(".ant-image-preview-mask")) {
      e.preventDefault();
      const menu = document.querySelector(".right-mouse-share-responsive");
      if (180 < window.innerWidth - e.clientX) {
        leftPos = `${e.clientX - 10}px`;
      } else {
        leftPos = `${e.pageX - 180}px`;
      }
      if (250 < window.innerHeight - e.clientY) {
        topPos = `${e.clientY - 10}px`;
      } else {
        topPos = `${e.pageY - 114}px`;
      }
      menu.style.display = "block";
      menu.style.top = topPos;
      menu.style.left = leftPos;
      e.stopPropagation();
    }
  };

  // contextMenu Click Right mouse

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
        handleClickResponsiveIcon={handleClickResponsiveIcon}
        valueResponsiveRightClick={valueRightClickMessage}
        handleClickGhim={handleClickGhim}
      />
      {/* RightmouseResponsive */}

      <Row id="wrapper">
        {/* Nav1 */}
        <Nav1 />
        {/* Nav1 */}

        {/* Nav2 */}
        <Nav2
          handleClickAllTitle={handleClickAllTitle}
          handleClickNotReadTitle={handleClickNotReadTitle}
          dataBoxChatRender={dataBoxChatRender}
          handleClickChooseBoxChat={handleClickChooseBoxChat}
          valueChats={valueChats}
        />
        {/* Nav2 */}

        <Col className="box-nav-3">
          {/* NavChatHead */}
          <NavChatHead
            headerBoxChat={headerBoxChat}
            handleClickNavRight={handleClickNavRight}
            hiddenRightNav={hiddenRightNav}
            handleClickImgChat={handleClickImgChat}
          />
          {/* NavChatHead */}
          {lengthGhim ? (
            <>
              <div className="box-ghim-1">
                <Ghim
                  valueListGhim={valueListGhim}
                  lengthGhim={lengthGhim}
                  renderImageFile={renderImageFile}
                />
              </div>
              {lengthGhim > 1 ? (
                <div className="box-ghim-2">
                  <Row className="list-ghim">
                    <div className="list">Danh sách ghim ({lengthGhim})</div>
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
                  {valueListGhim.map((value, key) => {
                    return (
                      <ListGhim
                        value={value}
                        key={key}
                        renderImageFile={renderImageFile}
                      />
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
                  className={value.other_people ? "box-other-people" : "box-me"}
                  onMouseOver={() => onMounseOverBox(key)}
                  onMouseOut={() => onMouseOutBox(key)}
                >
                  <Row className={`share-response share-response-${key}`}>
                    <div>
                      <ExportOutlined
                        onClick={() => handleClickResponsiveIcon(value)}
                      />
                    </div>
                    <div>
                      <ShareAltOutlined />
                    </div>
                  </Row>
                  <div className={value.other_people ? "other-people" : "me"}>
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
                        setValueReRightClickMessage(value);
                      }}
                    >
                      {value.url ? (
                        <ImageOrVideo value={value} />
                      ) : value.file ? (
                        <RenderFile
                          renderImageFile={renderImageFile}
                          value={value}
                          bytesToSize={bytesToSize}
                        />
                      ) : (
                        <>
                          <div className="content-chat" key={key}>
                            {value.Responsive && (
                              <ResponsiveInput
                                ResponsiveInputValue={value.Responsive}
                                clearResponsiveTnputValue={
                                  clearResponsiveTnputValue
                                }
                                renderImageFile={renderImageFile}
                              />
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
                    onClick={handleClickImgChat}
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
                    onClick={handleClickImgChat}
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
                <RadiusUpleftOutlined className="not-use" />
              </div>
              <div>
                <ContactsOutlined className="not-use" />
              </div>
              <div>
                <ClockCircleOutlined className="not-use" />
              </div>
              <div>
                <ScheduleOutlined className="not-use" />
              </div>
              <div>
                <FontColorsOutlined className="not-use" />
              </div>
              <div>
                <ExclamationOutlined className="not-use" />
              </div>
              <div>
                <EllipsisOutlined className="not-use" />
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
                    <CommentOutlined className="not-use" />
                  </div>
                  <div>
                    <SmileOutlined className="not-use" />
                  </div>
                  <div>
                    <DingtalkOutlined className="not-use" />
                  </div>
                  <div>
                    {valueChat.trim() !== "" && valueChat !== null ? (
                      <span
                        className="button-sent"
                        onClick={() => render(valueChat)}
                      >
                        GỬI
                      </span>
                    ) : (
                      <LikeOutlined className="not-use" />
                    )}
                  </div>
                </Row>
              </Row>
            </div>
          </div>
        </Col>
        <Nav4
          hiddenRightNav={hiddenRightNav}
          handleClickImgChat={handleClickImgChat}
          headerBoxChat={headerBoxChat}
        />
      </Row>
    </>
  );
}

export default DefaultLayout;
