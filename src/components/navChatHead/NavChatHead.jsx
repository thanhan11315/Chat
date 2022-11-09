import { Row } from "antd";
import {
  LeftOutlined,
  UserOutlined,
  // TagOutlined,
  UsergroupAddOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ImageGroup from "../imageGroup/ImageGroup";
import React from "react";
import "./NavChatHead.scss";

function NavChatHead(props) {
  return (
    <Row className="box-nav-chat">
      <Row>
        <div
          className="button-phone"
          onClick={() => {
            const hiddenBoxNav2 = document.querySelector(".box-nav-2");
            hiddenBoxNav2.classList.remove("hiddenBoxNav2");
            const hiddenBoxNav1 = document.querySelector(".box-nav-1");
            hiddenBoxNav1.classList.remove("hiddenBoxNav1");
          }}
        >
          <LeftOutlined />
        </div>
        <Row className="box-1">
          <div className="image">
            {props.dataUserFriend?.group ? (
              <div
                onClick={() => props.handleClickImgChat(props.dataUserFriend)}
              >
                <ImageGroup dataUserFriend={props.dataUserFriend} />
              </div>
            ) : (
              <img
                src={props.dataUserFriend?.avatar}
                alt="not load img"
                onClick={() => props.handleClickImgChat(props.dataUserFriend)}
                style={{
                  border: "0.5px solid #fff",
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div className="box-1-1">
            <div className="title">{props.dataUserFriend?.name}</div>
            <Row className="status">
              <div className="status-1">
                <UserOutlined
                  style={{
                    marginRight: "5px",
                  }}
                />
              </div>
              <div className="status-2">{props.dataUserFriend?.status}</div>
              <div className="brick"></div>
              {/* <div className="icon">
                <TagOutlined />
              </div> */}
            </Row>
          </div>
        </Row>
      </Row>
      <div className="box-2">
        <Row className="icon-title ">
          <div className="not-use">
            <UsergroupAddOutlined />
          </div>
          <div className="not-use">
            <SearchOutlined />
          </div>
          <div className="not-use">
            <VideoCameraOutlined />
          </div>
          <div
            className="control-nav-right"
            onClick={(e) => {
              props.handleClickNavRight(e);
              props.setHiddenSeeAllMembersNavRight(true);
            }}
          >
            {props.hiddenRightNav ? (
              <MenuFoldOutlined />
            ) : (
              <MenuUnfoldOutlined />
            )}
          </div>
        </Row>
      </div>
    </Row>
  );
}

export default NavChatHead;
