import React from "react";
import { Row } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "./ListGhim.scss";
function ListGhim(props) {
  return (
    <>
      <Row className="box-ghim">
        <Row className="box-1">
          {props.value.type === "image" ? (
            <>
              <div className="image-box">
                <div className="border-right" />
                <img alt="img not load" src={props.value.url} />
              </div>
            </>
          ) : props.value.type === "video" ? (
            <>
              <div className="image-box">
                <div className="border-right" />
                <video alt="video not load" src={props.value.url} />
              </div>
            </>
          ) : props.value.file ? (
            <>
              <div className="image-box">
                <div className="border-right" />
                <img
                  alt="img not load"
                  src={props.renderImageFile(props.value.file.name)}
                />
              </div>
            </>
          ) : (
            <div className="image-message">
              <MessageOutlined />
            </div>
          )}
          <div className="box-1-1">
            <div className="title">
              {props.value?.type === "image" ? (
                <div className="content">[Hình ảnh]</div>
              ) : props.value?.type === "video" ? (
                <div className="content">[Video]</div>
              ) : props.value?.file ? (
                <div className="content">[File]</div>
              ) : (
                <div className="content">Tin nhắn</div>
              )}
            </div>
            <div className="status">
              <div className="content">
                {`${props.value?.name}: ${props.value?.content}`}
              </div>
            </div>
          </div>
        </Row>
      </Row>
    </>
  );
}

export default ListGhim;
