import React from "react";
import { Row } from "antd";
import "./ShareInput.scss";

function ShareInput(props) {
  return (
    <Row className="responsive-input-box">
      {props.shareInputValue?.type === "image" ? (
        <div className="responsive-image">
          <img alt="img not load" src={props.shareInputValue.url} />
        </div>
      ) : props.shareInputValue?.type === "video" ? (
        <div className="responsive-image">
          <video alt="video not load" src={props.shareInputValue.url} />
        </div>
      ) : props.shareInputValue?.file ? (
        <div className="responsive-image">
          <img
            alt="img not load"
            src={props.renderImageFile(props.shareInputValue?.file.name)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="Responsive-content">
        {props.shareInputValue?.type === "image" ? (
          <div className="content">[Hình ảnh]</div>
        ) : props.shareInputValue?.type === "video" ? (
          <div className="content">[Video]</div>
        ) : props.shareInputValue?.file ? (
          <div className="content">[File]</div>
        ) : (
          <div className="content">{props.shareInputValue?.content}</div>
        )}
        <div className="Responsive">
          {props.shareInputValue?.file && props.shareInputValue.file?.name}
        </div>
      </div>
    </Row>
  );
}

export default ShareInput;
