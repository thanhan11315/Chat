import React from "react";
import { Row } from "antd";
import { ExportOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./AnswerInput.css";

function AnswerInput(props) {
  return (
    <Row className="answer-input-box">
      <div className="border-right" />
      {props.answerInputValue.type === "image" ? (
        <div className="answer-image">
          <img alt="img not load" src={props.answerInputValue.url} />
        </div>
      ) : props.answerInputValue.type === "video" ? (
        <div className="answer-image">
          <video alt="video not load" src={props.answerInputValue.url} />
        </div>
      ) : props.answerInputValue.file ? (
        <div className="answer-image">
          <img
            alt="img not load"
            src={props.renderImageFile(props.answerInputValue.file.name)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="answer-content">
        <div className="answer">
          <ExportOutlined /> Trả lời
        </div>
        {props.answerInputValue.type === "image" ? (
          <div className="content">[Hình ảnh]</div>
        ) : props.answerInputValue.type === "video" ? (
          <div className="content">[Video]</div>
        ) : props.answerInputValue.file ? (
          <div className="content">
            {`[File] ${props.answerInputValue.file.name}`}
          </div>
        ) : (
          <div className="content">{props.answerInputValue.content}</div>
        )}
      </div>
      <div className="delete" onClick={() => props.clearAnswerTnputValue()}>
        <CloseCircleOutlined />
      </div>
    </Row>
  );
}

export default AnswerInput;
