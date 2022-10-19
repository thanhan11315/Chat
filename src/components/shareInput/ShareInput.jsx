import React from "react";
import { Row } from "antd";
import "./ShareInput.scss";
import LinkPreview from "../linkPreview/LinkPreview";

function ShareInput(props) {
  return (
    <>
      {props.shareInputValue?.type === "image" && (
        <Row className="responsive-input-box">
          <div className="responsive-image">
            <img alt="img not load" src={props.shareInputValue.url} />
          </div>
          <div className="Responsive-content">
            <div className="content">[Hình ảnh]</div>
          </div>
        </Row>
      )}
      {props.shareInputValue?.type === "video" && (
        <Row className="responsive-input-box">
          <div className="responsive-image">
            <video alt="video not load" src={props.shareInputValue.url} />
          </div>
          <div className="Responsive-content">
            <div className="content">[Video]</div>
          </div>
        </Row>
      )}
      {props.shareInputValue?.file && (
        <Row className="responsive-input-box">
          <div className="responsive-image">
            <img
              alt="img not load"
              src={props.renderImageFile(props.shareInputValue?.file.name)}
            />
          </div>
          <div className="Responsive-content">
            <div className="content">[File]</div>
            <div className="Responsive">
              {props.shareInputValue?.file && props.shareInputValue.file?.name}
            </div>
          </div>
        </Row>
      )}
      {props.shareInputValue?.text_message &&
        !props.shareInputValue?.is_message_url && (
          <Row className="responsive-input-box">
            <div className="Responsive-content">
              <div className="content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.shareInputValue?.text_message,
                  }}
                />
              </div>
            </div>
          </Row>
        )}
      {props.shareInputValue?.text_message &&
        props.shareInputValue?.is_message_url && (
          <LinkPreview size="seven" url={props.shareInputValue?.message_url} />
        )}
    </>
  );
}

export default ShareInput;
