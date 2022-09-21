import React from "react";
import { Col, Row } from "antd";
import InPutSearch from "../../../components/inPutSearch/InPutSearch";
import {
  UserAddOutlined,
  UsergroupAddOutlined,
  DownOutlined,
  EllipsisOutlined,
  BellOutlined,
} from "@ant-design/icons";
import "./Nav2.css";

function Nav2(props) {
  return (
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
          <Col className="all title selected" onClick={props.onClickAllTitle}>
            Tất cả
          </Col>
          <Col className="not-read title" onClick={props.onClickNotReadTitle}>
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
        {props.dataBoxChat.map((value, key) => {
          return (
            <Row
              className="box-choose-chatbox"
              onClick={() => props.onClickChooseBoxChat(value)}
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
  );
}

export default Nav2;
