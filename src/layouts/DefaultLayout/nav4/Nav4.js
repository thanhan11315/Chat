import React from "react";
import { LikeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
function Nav4(props) {
  return (
    <Col className={`box-nav-4 ${props.hiddenRightNav}`}>
      <div className="title-nav">Thông tin hội thoại</div>
      <div className="box-wrapper">
        <div className="box-information">
          <div className="image">
            <img
              src={props.headerBoxChat.avatar}
              onClick={props.handleClickImgChat}
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
            <div className="header">{props.headerBoxChat.name}</div>
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
              <div className="content">Ghim hội thoại</div>
            </div>
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <LikeOutlined />
                </div>
              </div>
              <div className="content">Thêm thành viên</div>
            </div>
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <LikeOutlined />
                </div>
              </div>
              <div className="content">Quản lí nhóm</div>
            </div>
          </Row>
        </div>
        <div className="test" />
      </div>
    </Col>
  );
}

export default Nav4;
