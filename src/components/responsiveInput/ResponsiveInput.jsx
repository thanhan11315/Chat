import React from "react";
import { Row } from "antd";
import { ExportOutlined, CloseOutlined } from "@ant-design/icons";
import LinkPreview from "../linkPreview/LinkPreview";
import "./ResponsiveInput.scss";

function ResponsiveInput(props) {
  return (
    <>
      {props.ResponsiveInputValue.type === "image" && (
        <Row className="responsive-input-box">
          <div className="border-right" />
          <div className="responsive-image">
            <img alt="img not load" src={props.ResponsiveInputValue.url} />
          </div>
          <div className="Responsive-content">
            {props.size === "one" && (
              <div className="Responsive">
                <ExportOutlined /> Trả lời
              </div>
            )}
            {props.size === "two" && (
              <div className="Responsive">
                {props.ResponsiveInputValue.name}
              </div>
            )}

            <div className="content">[Hình ảnh]</div>
          </div>
          {props.size === "one" && (
            <div
              className="delete"
              onClick={() => props.clearResponsiveTnputValue()}
            >
              <CloseOutlined />
            </div>
          )}
        </Row>
      )}
      {props.ResponsiveInputValue.type === "video" && (
        <Row className="responsive-input-box">
          <div className="border-right" />
          <div className="responsive-image">
            <video alt="video not load" src={props.ResponsiveInputValue.url} />
          </div>
          <div className="Responsive-content">
            {props.size === "one" && (
              <div className="Responsive">
                <ExportOutlined /> Trả lời
              </div>
            )}
            {props.size === "two" && (
              <div className="Responsive">
                {props.ResponsiveInputValue.name}
              </div>
            )}
            <div className="content">[Video]</div>
          </div>
          {props.size === "one" && (
            <div
              className="delete"
              onClick={() => props.clearResponsiveTnputValue()}
            >
              <CloseOutlined />
            </div>
          )}
        </Row>
      )}
      {props.ResponsiveInputValue.file && (
        <Row className="responsive-input-box">
          <div className="border-right" />
          <div className="responsive-image">
            <img
              alt="img not load"
              src={props.renderImageFile(
                props.ResponsiveInputValue?.file?.name
              )}
            />
          </div>
          <div className="Responsive-content">
            {props.size === "one" && (
              <div className="Responsive">
                <ExportOutlined /> Trả lời
              </div>
            )}
            {props.size === "two" && (
              <div className="Responsive">
                {props.ResponsiveInputValue?.name}
              </div>
            )}
            <div className="content">
              {`[File] ${props.ResponsiveInputValue?.file?.name}`}
            </div>
          </div>
          {props.size === "one" && (
            <div
              className="delete"
              onClick={() => props.clearResponsiveTnputValue()}
            >
              <CloseOutlined />
            </div>
          )}
        </Row>
      )}
      {props.ResponsiveInputValue?.text_message &&
        !props.ResponsiveInputValue?.is_message_url && (
          <Row className="responsive-input-box">
            <div className="border-right" />
            <div className="Responsive-content">
              {props.size === "one" && (
                <div className="Responsive">
                  <ExportOutlined /> Trả lời
                </div>
              )}
              {props.size === "two" && (
                <div className="Responsive">
                  {props.ResponsiveInputValue.name}
                </div>
              )}
              <div className="content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.ResponsiveInputValue.text_message,
                  }}
                />
              </div>
            </div>
            {props.size === "one" && (
              <div
                className="delete"
                onClick={() => props.clearResponsiveTnputValue()}
              >
                <CloseOutlined />
              </div>
            )}
          </Row>
        )}
      {props.ResponsiveInputValue.text_message &&
        props.ResponsiveInputValue.is_message_url && (
          <Row className="responsive-input-box">
            <LinkPreview
              url={props.ResponsiveInputValue.message_url}
              size="five"
              type={props.size}
              name={props.ResponsiveInputValue.name}
            />
            {props.size === "one" && (
              <div
                className="delete"
                onClick={() => props.clearResponsiveTnputValue()}
              >
                <CloseOutlined />
              </div>
            )}
          </Row>
        )}
    </>
  );
}

export default ResponsiveInput;
