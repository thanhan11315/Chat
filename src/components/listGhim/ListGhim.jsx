import React from "react";
import { Row } from "antd";
import { MessageOutlined, CloseOutlined } from "@ant-design/icons";
import "./ListGhim.scss";
import LinkPreview from "../linkPreview/LinkPreview";
import mapImage from "../../assets/images/mapImage.jfif";
function ListGhim(props) {
  const hiddenAndShowScrollBottom = () => {
    document.querySelector(".button-scroll-bottom").classList.remove("hidden");
    setTimeout(() => {
      const elementBoxChat = document.querySelector(".box-nav-3 .box-chat");
      if (elementBoxChat.scrollTop > -500) {
        document.querySelector(".button-scroll-bottom").classList.add("hidden");
      }
    }, 0);
  };
  return (
    <>
      {props.value?.type === "image" && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <img alt="img not load" src={props.value.url} />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[Hình ảnh]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.value?.name}: ${props.value?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.type === "video" && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <video alt="video not load" src={props.value.url} />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[Video]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.value?.name}: ${props.value?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.type === "file" && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <img
                    alt="img not load"
                    src={props.renderImageFile(props.value.file.name)}
                  />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[File]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.value?.name}: ${props.value?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.text_message && !props.value?.is_message_url && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <div className="image-message">
                <MessageOutlined />
              </div>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">Tin nhắn</div>
                </div>
                <div className="status">
                  <div className="content">
                    <>
                      {props.value?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: props.value?.text_message,
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.text_message && !props.value?.is_message_url && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <div className="image-message">
                <MessageOutlined />
              </div>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">Tin nhắn</div>
                </div>
                <div className="status">
                  <div className="content">
                    <>
                      {props.value?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: props.value?.text_message,
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.type === "placeMaps" && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <div className="image-box">
                <div className="border-right" />
                <img alt="img not load" src={mapImage} />
              </div>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">Tin nhắn</div>
                </div>
                <div className="status">
                  <div className="content">
                    <>
                      {props.value?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: "[Bản đồ]",
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.type === "likeIcon" && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <Row className="box-1">
              <div className="image-message">
                <MessageOutlined />
              </div>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">Tin nhắn</div>
                </div>
                <div className="status">
                  <div className="content">
                    <>
                      {props.value?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: props.value?.content,
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
      {props.value?.text_message && props.value?.is_message_url && (
        <Row
          className="box-ghim"
          onClick={() => {
            hiddenAndShowScrollBottom();
            props.handleClickResponsiveValue(props.value);
          }}
        >
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.value.id}`}
          >
            <LinkPreview
              url={props.value?.message_url}
              size="six"
              name={props.value?.name}
            />
          </a>
          <div
            className="delete-ghim"
            onClick={(e) => {
              e.stopPropagation(e);
              props.handleClickUnGhim(props.value);
            }}
          >
            <CloseOutlined />
          </div>
        </Row>
      )}
    </>
  );
}

export default ListGhim;
