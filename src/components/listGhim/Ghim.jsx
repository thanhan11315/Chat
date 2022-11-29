import React from "react";
import { Row } from "antd";
import {
  MessageOutlined,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./ListGhim.scss";
import LinkPreview from "../linkPreview/LinkPreview";
function Ghim(props) {
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
      {props.valueListGhim[0]?.type === "image" && (
        <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.valueListGhim[0].id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <img alt="img not load" src={props.valueListGhim[0].url} />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[Hình ảnh]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.valueListGhim[0]?.name}: ${props.valueListGhim[0]?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div className="box-2">
            <div className="delete-ghim">
              <CloseOutlined
                onClick={() => props.handleClickUnGhim(props.valueListGhim[0])}
              />
            </div>
            {props.lengthGhim > 1 && (
              <div
                className="ghim"
                onClick={() => {
                  document.querySelector(".box-ghim-1").style.display = "none";
                  document.querySelector(".box-ghim-2").style.display = "block";
                }}
              >
                {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
              </div>
            )}
          </div>
        </Row>
      )}
      {props.valueListGhim[0]?.type === "video" && (
        <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.valueListGhim[0].id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <video
                    alt="video not load"
                    src={props.valueListGhim[0].url}
                  />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[Video]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.valueListGhim[0]?.name}: ${props.valueListGhim[0]?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div className="box-2">
            <div className="delete-ghim">
              <CloseOutlined
                onClick={() => props.handleClickUnGhim(props.valueListGhim[0])}
              />
            </div>
            {props.lengthGhim > 1 && (
              <div
                className="ghim"
                onClick={() => {
                  document.querySelector(".box-ghim-1").style.display = "none";
                  document.querySelector(".box-ghim-2").style.display = "block";
                }}
              >
                {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
              </div>
            )}
          </div>
        </Row>
      )}
      {props.valueListGhim[0].file && (
        <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.valueListGhim[0].id}`}
          >
            <Row className="box-1">
              <>
                <div className="image-box">
                  <div className="border-right" />
                  <img
                    alt="img not load"
                    src={props.renderImageFile(
                      props.valueListGhim[0].file.name
                    )}
                  />
                </div>
              </>
              <div className="box-1-1">
                <div className="title">
                  <div className="content">[File]</div>
                </div>
                <div className="status">
                  <div className="content">
                    {`${props.valueListGhim[0]?.name}: ${props.valueListGhim[0]?.content}`}
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div className="box-2">
            <div className="delete-ghim">
              <CloseOutlined
                onClick={() => props.handleClickUnGhim(props.valueListGhim[0])}
              />
            </div>
            {props.lengthGhim > 1 && (
              <div
                className="ghim"
                onClick={() => {
                  document.querySelector(".box-ghim-1").style.display = "none";
                  document.querySelector(".box-ghim-2").style.display = "block";
                }}
              >
                {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
              </div>
            )}
          </div>
        </Row>
      )}
      {props.valueListGhim[0]?.text_message &&
        !props.valueListGhim[0]?.is_message_url && (
          <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
            <a
              style={{ width: "calc(100% - 175px)" }}
              href={`#${props.valueListGhim[0].id}`}
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
                        {props.valueListGhim[0]?.name}
                        <span>:</span>{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: props.valueListGhim[0]?.text_message,
                          }}
                        />
                      </>
                    </div>
                  </div>
                </div>
              </Row>
            </a>
            <div className="box-2">
              <div className="delete-ghim">
                <CloseOutlined
                  onClick={() =>
                    props.handleClickUnGhim(props.valueListGhim[0])
                  }
                />
              </div>
              {props.lengthGhim > 1 && (
                <div
                  className="ghim"
                  onClick={() => {
                    document.querySelector(".box-ghim-1").style.display =
                      "none";
                    document.querySelector(".box-ghim-2").style.display =
                      "block";
                  }}
                >
                  {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
                </div>
              )}
            </div>
          </Row>
        )}
      {props.valueListGhim[0]?.text_message &&
        props.valueListGhim[0]?.is_message_url && (
          <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
            <a
              style={{ width: "calc(100% - 175px)" }}
              href={`#${props.valueListGhim[0].id}`}
            >
              <LinkPreview
                url={props.valueListGhim[0]?.message_url}
                size="six"
                name={props.valueListGhim[0]?.name}
              />
            </a>
            <div className="box-2">
              <div className="delete-ghim">
                <CloseOutlined
                  onClick={() =>
                    props.handleClickUnGhim(props.valueListGhim[0])
                  }
                />
              </div>
              {props.lengthGhim > 1 && (
                <div
                  className="ghim"
                  onClick={() => {
                    document.querySelector(".box-ghim-1").style.display =
                      "none";
                    document.querySelector(".box-ghim-2").style.display =
                      "block";
                  }}
                >
                  {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
                </div>
              )}
            </div>
          </Row>
        )}
      {props.valueListGhim[0]?.type === "placeMaps" && (
        <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.valueListGhim[0].id}`}
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
                      {props.valueListGhim[0]?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: "[Bản Đồ]",
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div className="box-2">
            <div className="delete-ghim">
              <CloseOutlined
                onClick={() => props.handleClickUnGhim(props.valueListGhim[0])}
              />
            </div>
            {props.lengthGhim > 1 && (
              <div
                className="ghim"
                onClick={() => {
                  document.querySelector(".box-ghim-1").style.display = "none";
                  document.querySelector(".box-ghim-2").style.display = "block";
                }}
              >
                {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
              </div>
            )}
          </div>
        </Row>
      )}
      {props.valueListGhim[0]?.type === "likeIcon" && (
        <Row className="box-ghim" onClick={hiddenAndShowScrollBottom}>
          <a
            style={{ width: "calc(100% - 175px)" }}
            href={`#${props.valueListGhim[0].id}`}
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
                      {props.valueListGhim[0]?.name}
                      <span>:</span>{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: props.valueListGhim[0]?.content,
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
            </Row>
          </a>
          <div className="box-2">
            <div className="delete-ghim">
              <CloseOutlined
                onClick={() => props.handleClickUnGhim(props.valueListGhim[0])}
              />
            </div>
            {props.lengthGhim > 1 && (
              <div
                className="ghim"
                onClick={() => {
                  document.querySelector(".box-ghim-1").style.display = "none";
                  document.querySelector(".box-ghim-2").style.display = "block";
                }}
              >
                {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
              </div>
            )}
          </div>
        </Row>
      )}
    </>
  );
}

export default Ghim;
