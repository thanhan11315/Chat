import React from "react";
import { Col, Row } from "antd";
import InPutSearch from "../../../components/inPutSearch/InPutSearch";
import ImageGroup from "../../../components/imageGroup/ImageGroup";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  // DownOutlined,
  EllipsisOutlined,
  BellOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import "./Nav2.scss";

function Nav2(props) {
  const timepast = (value) => {
    if (props.date?.date - value?.date > 10) {
      return `${value?.date} / ${value?.moth}`;
    } else if (
      props.date?.date - value?.date < 10 &&
      props.date?.date - value?.date > 0
    ) {
      return `${props.date?.date - value?.date} ngày`;
    } else if (
      props.date.hours - value?.hours < 24 &&
      props.date.hours - value?.hours > 0
    ) {
      return `${props.date.hours - value?.hours} giờ`;
    } else if (
      props.date.minutes - value?.minutes < 60 &&
      props.date.minutes - value?.minutes > 0
    ) {
      return `${props.date.minutes - value?.minutes} phút`;
    } else {
      return "gần đây";
    }
  };

  const inputSearch = document.querySelector(
    ".box-nav-2 .search .inputSearch .ant-input"
  );

  const VIETNAMESE_A = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠ";
  const ARRVIETNAMESE_A = VIETNAMESE_A.split("");
  const VIETNAMESE_E = "ẾỀỂỄỆÊÉÈẺẼẸ";
  const ARRVIETNAMESE_E = VIETNAMESE_E.split("");
  const VIETNAMESE_I = "ÍÌỈĨỊ";
  const ARRVIETNAMESE_I = VIETNAMESE_I.split("");
  const VIETNAMESE_O = "ỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌ";
  const ARRVIETNAMESE_O = VIETNAMESE_O.split("");
  const VIETNAMESE_U = "ỨỪỬỮỰƯÚÙỦŨỤ";
  const ARRVIETNAMESE_U = VIETNAMESE_U.split("");
  const VIETNAMESE_Y = "ÝỲỶỸỴ";
  const ARRVIETNAMESE_Y = VIETNAMESE_Y.split("");

  const vietNameseOmitMark = (string) => {
    let newString = string;
    ARRVIETNAMESE_A.forEach((character) => {
      newString = newString.replaceAll(character, "A");
    });
    newString = newString.replaceAll("Đ", "D");
    ARRVIETNAMESE_E.forEach((character) => {
      newString = newString.replaceAll(character, "E");
    });
    ARRVIETNAMESE_I.forEach((character) => {
      newString = newString.replaceAll(character, "I");
    });
    ARRVIETNAMESE_O.forEach((character) => {
      newString = newString.replaceAll(character, "O");
    });
    ARRVIETNAMESE_U.forEach((character) => {
      newString = newString.replaceAll(character, "U");
    });
    ARRVIETNAMESE_Y.forEach((character) => {
      newString = newString.replaceAll(character, "Y");
    });
    return newString;
  };
  const searchFriend = () => {
    let filter, boxElement, elements, elementTitle, i, txtValue, lengthElements;
    filter = vietNameseOmitMark(inputSearch?.value?.toUpperCase());
    boxElement = document.querySelector(".box-nav-2 .overflow");
    elements = boxElement.querySelectorAll(".box-choose-chatbox");
    lengthElements = elements.length;
    for (i = 0; i < lengthElements; i++) {
      elementTitle = elements[i].querySelector(".title");
      txtValue =
        vietNameseOmitMark(elementTitle.textContent.toUpperCase()) ||
        vietNameseOmitMark(elementTitle.innerHTML.toUpperCase());
      if (txtValue.indexOf(filter.trim()) > -1) {
        elements[i].style.display = "flex";
      } else {
        elements[i].style.display = "none";
      }
    }
  };

  const nameOnLastValueChat = (
    idUserLastValueChat,
    idUserBoxChat,
    idUserMe,
    nameLastValueChat
  ) => {
    if (idUserLastValueChat === idUserBoxChat) {
      return "";
    } else if (idUserLastValueChat === idUserMe) {
      return "Bạn: ";
    } else {
      if (nameLastValueChat) {
        return `${nameLastValueChat}: `;
      }
    }
  };

  if (props.focusBoxSearch === false) {
    const elementBoxSearch = document.querySelector(
      ".box-nav-2 .inputSearch .ant-input"
    );

    elementBoxSearch &&
      elementBoxSearch.addEventListener("focus", () => {
        if (props.focusBoxSearch === false) {
          props.setFocusBoxSearch(true);
          console.log(props.dataUserFriendsStorage);
        }
      });
  }
  const handleClickClose = () => {
    props.setFocusBoxSearch(false);
  };

  const ifUsentMessage = (
    currentValueChat,
    valueIdUser,
    dataUserFriendIdUser
  ) => {
    if (currentValueChat && valueIdUser !== dataUserFriendIdUser) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Col className="box-nav-2 box-nav-2-mobile">
      {console.log("err2")}
      <Row className="search-add">
        <Col className="search">
          <InPutSearch searchFriend={searchFriend} />
        </Col>
        {!props.focusBoxSearch && (
          <>
            <Col className="add-friend icon not-use">
              <UserAddOutlined />
            </Col>
            <Col
              className="create-group icon"
              onClick={props.handleClickCreateGroup}
            >
              <UsergroupAddOutlined />
            </Col>
          </>
        )}
        {props.focusBoxSearch && (
          <div className="close" onClick={handleClickClose}>
            Đóng
          </div>
        )}
      </Row>
      <Row className="title-nav-2">
        {!props.focusBoxSearch && (
          <Row className="box-title-nav2-1">
            <Col
              className="all title selected"
              onClick={props.handleClickAllTitle}
            >
              Tất cả
            </Col>
            <Col
              className="not-read title"
              onClick={props.handleClickNotReadTitle}
            >
              Chưa đọc
            </Col>
          </Row>
        )}
        {props.focusBoxSearch && (
          <div style={{ fontSize: "0.875rem", fontWeight: "600" }}>
            {" "}
            Danh sách tìm kiếm{" "}
          </div>
        )}
        <Row className="box-title-nav2-2">
          {/* <Col className="title classify">
            Phân loại
            <DownOutlined
              style={{
                marginLeft: "8px",
              }}
            />
          </Col> */}
          {/* <Col className="title dots">
            <EllipsisOutlined />
          </Col> */}
        </Row>
      </Row>
      <div className="overflow">
        {props.dataUserFriends &&
          !props.focusBoxSearch &&
          props.dataUserFriends?.map((value, key) => {
            return (
              <Row
                className={`box-choose-chatbox box-choose-chatbox-${value.id_user}`}
                onClick={() => props.handleClickChooseBoxChat(value)}
                key={key}
                onContextMenu={(e) =>
                  props.onContextMenuChooseBoxChat(e, value)
                }
                style={{ order: value.pin_conversation && -value.style_order }}
              >
                <Row className="box1">
                  <Col className="image">
                    {value.group ? (
                      <ImageGroup dataUserFriend={value} />
                    ) : (
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
                    )}
                  </Col>
                  <Col className="choose-chatbox">
                    <div
                      className="title"
                      style={{ fontWeight: value.not_read && "600" }}
                    >
                      {value.name}
                    </div>
                    <div
                      className="content"
                      style={{ color: value.not_read && "#001a33" }}
                    >
                      {!ifUsentMessage(
                        value.current_value_chat,
                        value.id_user,
                        props.dataUserFriend.id_user
                      ) && (
                        <>
                          {!value?.last_value_chat && "Chưa có tin nhắn"}
                          {nameOnLastValueChat(
                            value?.last_value_chat?.id_user,
                            value?.id_user,
                            props?.dataUserMe?.id_user,
                            value?.last_value_chat?.name
                          )}
                          {value.last_value_chat?.type === "image" &&
                            !value.last_value_chat?.delete && <>[Hình ảnh]</>}
                          {value.last_value_chat?.type === "video" &&
                            !value.last_value_chat?.delete && <>[Video]</>}
                          {value.last_value_chat?.file &&
                            !value.last_value_chat?.delete && (
                              <>{`[File] ${value.last_value_chat?.file.name}`}</>
                            )}
                          {value.last_value_chat?.text_message &&
                            !value.last_value_chat?.is_message_url &&
                            !value.last_value_chat?.delete && (
                              <>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: value.last_value_chat?.text_message,
                                  }}
                                />
                              </>
                            )}
                          {value.last_value_chat?.text_message &&
                            value.last_value_chat?.is_message_url &&
                            !value.last_value_chat?.delete && (
                              <>{`[Link] ${value.last_value_chat?.message_url}`}</>
                            )}
                          {value.last_value_chat?.delete && (
                            <>Tin nhắn đã bị xóa</>
                          )}
                          {value.last_value_chat?.add_members_to_group && (
                            <>
                              {value.last_value_chat?.members_added[0].name}
                              {value.last_value_chat?.members_added.length >
                                1 &&
                                ` và ${
                                  value.last_value_chat?.members_added.length -
                                  1
                                }
                            người khác`}
                              {` được thêm vào nhóm `}
                            </>
                          )}
                          {value.last_value_chat?.remove_members_to_group && (
                            <>
                              {value.last_value_chat?.members_removed.name} đã
                              rời khỏi nhóm
                            </>
                          )}
                          {value.last_value_chat?.invite_out_group && (
                            <>
                              {value.last_value_chat?.member_removed.name} được
                              mời ra khỏi nhóm
                            </>
                          )}
                        </>
                      )}
                      {ifUsentMessage(
                        value.current_value_chat,
                        value.id_user,
                        props.dataUserFriend.id_user
                      ) &&
                        value.id_user !== props.dataUserFriend.id_user && (
                          <>{value.current_value_chat}</>
                        )}
                    </div>
                  </Col>
                </Row>
                <Col className="box2">
                  {!ifUsentMessage(
                    value.current_value_chat,
                    value.id_user,
                    props.dataUserFriend.id_user
                  ) && (
                    <>
                      <div className="time-before" onClick={() => {}}>
                        {value?.notification && <BellOutlined />}
                        {timepast(value?.last_value_chat)}
                      </div>
                      <div
                        className={`number-unread number-unread-${value?.id_user}`}
                        key={value?.id_user}
                      >
                        <div className="time-before">
                          {value?.pin_conversation && <PushpinOutlined />}
                        </div>
                        <div>{value?.not_read && <div></div>}</div>
                      </div>
                    </>
                  )}
                  {ifUsentMessage(
                    value.current_value_chat,
                    value.id_user,
                    props.dataUserFriend.id_user
                  ) && (
                    <div
                      style={{
                        color: "var(--R60)",
                        fontSize: "0.75rem",
                        fontWeight: "400",
                      }}
                    >
                      Chưa gửi
                    </div>
                  )}
                </Col>
                <Col className="box3">
                  <div className="icon">
                    <EllipsisOutlined />
                  </div>
                </Col>
              </Row>
            );
          })}
        {props.dataUserFriendsStorage &&
          props.focusBoxSearch &&
          props?.dataUserFriendsStorage?.map((value) => {
            return (
              <Row
                className={`box-choose-chatbox box-choose-chatbox-${value.id_user}`}
                onClick={() => props.handleClickChooseBoxChat(value)}
              >
                <Row className="box1">
                  <Col className="image">
                    {value?.group ? (
                      <ImageGroup dataUserFriend={value} />
                    ) : (
                      <img
                        src={value?.avatar}
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
                    )}
                  </Col>
                  <Col className="choose-chatbox">
                    <div
                      className="title"
                      style={{
                        fontWeight: value?.not_read && "600",
                      }}
                    >
                      {value?.name}
                    </div>
                    <div
                      className="content"
                      style={{
                        color: value?.not_read && "#001a33",
                      }}
                    ></div>
                  </Col>
                </Row>
              </Row>
            );
          })}
      </div>
      <div />
    </Col>
  );
}

export default Nav2;
