import React from "react";
import { Row } from "antd";
import { ExportOutlined, CloseOutlined } from "@ant-design/icons";
import "./ResponsiveInput.scss";

function ResponsiveInput(props) {
  return (
    <Row className="responsive-input-box">
      <div className="border-right" />
      {props.ResponsiveInputValue.type === "image" ? (
        <div className="responsive-image">
          <img alt="img not load" src={props.ResponsiveInputValue.url} />
        </div>
      ) : props.ResponsiveInputValue.type === "video" ? (
        <div className="responsive-image">
          <video alt="video not load" src={props.ResponsiveInputValue.url} />
        </div>
      ) : props.ResponsiveInputValue.file ? (
        <div className="responsive-image">
          <img
            alt="img not load"
            src={props.renderImageFile(props.ResponsiveInputValue.file.name)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="Responsive-content">
        <div className="Responsive">
          <ExportOutlined /> Trả lời
        </div>
        {props.ResponsiveInputValue.type === "image" ? (
          <div className="content">[Hình ảnh]</div>
        ) : props.ResponsiveInputValue.type === "video" ? (
          <div className="content">[Video]</div>
        ) : props.ResponsiveInputValue.file ? (
          <div className="content">
            {`[File] ${props.ResponsiveInputValue.file.name}`}
          </div>
        ) : (
          <div className="content">{props.ResponsiveInputValue.content}</div>
        )}
      </div>
      <div className="delete" onClick={() => props.clearResponsiveTnputValue()}>
        <CloseOutlined />
      </div>
    </Row>
  );
}

export default ResponsiveInput;
