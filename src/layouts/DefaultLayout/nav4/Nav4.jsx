import React from "react";
import {
  BellOutlined,
  EditOutlined,
  PaperClipOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import "./Nav4.scss";
import RenderFile from "../../../components/file/RenderFile";
import { useState } from "react";
function Nav4(props) {
  const [showAllImage, setShowAllImage] = useState(false);
  const hanldeClickShowAllImage = () => {
    const element = document.querySelector(".box-element .content-image-video");
    element.style.maxHeight = "none";
    setShowAllImage(true);
  };
  const hanldeClickHiddenAllImage = () => {
    const element = document.querySelector(".box-element .content-image-video");
    element.style.maxHeight = "143px";
    setShowAllImage(false);
  };

  const [showAllFile, setShowAllFile] = useState(false);
  const hanldeClickShowAllFile = () => {
    const element = document.querySelector(".box-element .content-file");
    element.style.maxHeight = "none";
    setShowAllFile(true);
  };
  const hanldeClickHiddenAllFile = () => {
    const element = document.querySelector(".box-element .content-file");
    element.style.maxHeight = "217px";
    setShowAllFile(false);
  };
  return (
    <Col className={`box-nav-4 ${props.hiddenRightNav}`}>
      <div className="title-nav">Thông tin hội thoại</div>
      <div className="box-wrapper">
        <div className="box-information">
          <div className="image">
            <img
              src={props.dataUserFriend.avatar}
              onClick={() => props.handleClickImgChat(props.dataUserFriend)}
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
            <div className="header">{props.dataUserFriend.name}</div>
            <div className="icon">
              <EditOutlined />
            </div>
          </div>
          <Row className="box-icon-content">
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <BellOutlined />
                </div>
              </div>
              <div className="content">Bật Thông báo</div>
            </div>
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <PaperClipOutlined />
                </div>
              </div>
              <div className="content">Ghim hội thoại</div>
            </div>
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <UsergroupAddOutlined />
                </div>
              </div>
              <div className="content">Thêm thành viên</div>
            </div>
            <div className="icon-content">
              <div className="box-icon">
                <div className="icon">
                  <SettingOutlined />
                </div>
              </div>
              <div className="content">Quản lí nhóm</div>
            </div>
          </Row>
        </div>
        <div className="box-element">
          <div className="title">Ảnh/Video</div>
          <Image.PreviewGroup>
            <div className="content-image-video">
              {props.valueChats.map((valueChat, key) => {
                return (
                  valueChat.url && (
                    <div className="box-image-video" key={key}>
                      {valueChat.type === "video" ? (
                        <video src={valueChat.url} alt="not load" />
                      ) : (
                        <Image
                          src={valueChat.url}
                          alt="img not load"
                          className="image"
                        />
                      )}
                    </div>
                  )
                );
              })}
            </div>
            {showAllImage ? (
              <div className="div-button" onClick={hanldeClickHiddenAllImage}>
                Thu Gọn
              </div>
            ) : (
              <div className="div-button" onClick={hanldeClickShowAllImage}>
                Xem tất cả
              </div>
            )}
          </Image.PreviewGroup>
        </div>
        <div className="box-element">
          <div className="title">File</div>
          <div className="content-file">
            {props.valueChats.map((valueChat, key) => {
              return (
                valueChat.file && (
                  <RenderFile
                    key={key}
                    renderImageFile={props.renderImageFile}
                    value={valueChat}
                    bytesToSize={props.bytesToSize}
                  />
                )
              );
            })}
          </div>
          {showAllFile ? (
            <div className="div-button" onClick={hanldeClickHiddenAllFile}>
              Thu Gọn
            </div>
          ) : (
            <div className="div-button" onClick={hanldeClickShowAllFile}>
              Xem tất cả
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Nav4;