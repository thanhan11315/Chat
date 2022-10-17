import React from "react";
import { Col, Row } from "antd";
import InPutSearch from "../../../components/inPutSearch/InPutSearch";
import ImageGroup from "../../../components/imageGroup/ImageGroup";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  DownOutlined,
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

  return (
    <Col className="box-nav-2 box-nav-2-mobile">
      <Row className="search-add">
        <Col className="search">
          <InPutSearch />
        </Col>
        <Col className="add-friend icon not-use">
          <UserAddOutlined />
        </Col>
        <Col
          className="create-group icon"
          onClick={props.handleClickCreateGroup}
        >
          <UsergroupAddOutlined />
        </Col>
      </Row>
      <Row className="title-nav-2">
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
        {props.dataUserFriends &&
          props.dataUserFriends.map((value, key) => {
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
                      <>
                        {value.last_value_chat?.name}:{" "}
                        {value.last_value_chat?.type === "image" ? (
                          <>[Hình ảnh]</>
                        ) : value.last_value_chat?.type === "video" ? (
                          <>[Video]</>
                        ) : value.last_value_chat?.file ? (
                          <>{`[File] ${value.last_value_chat?.file.name}`}</>
                        ) : (
                          <>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: value.last_value_chat?.text_message,
                              }}
                            />
                          </>
                        )}
                      </>
                    </div>
                  </Col>
                </Row>
                <Col className="box2">
                  <div className="time-before" onClick={() => {}}>
                    {value?.notification && <BellOutlined />}
                    {timepast(value?.last_value_chat)}
                  </div>
                  {
                    <div
                      className={`number-unread number-unread-${value?.id_user}`}
                      key={value?.id_user}
                    >
                      <div className="time-before">
                        {value?.pin_conversation && <PushpinOutlined />}
                      </div>
                      <div>{value?.not_read && <div></div>}</div>
                    </div>
                  }
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
      <div />
    </Col>
  );
}

export default Nav2;
