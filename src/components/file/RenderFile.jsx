import React from "react";
import { Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./RenderFile.scss";

function RenderFile(props) {
  return (
    <div className="box-file">
      <Row className="box-content-file">
        <div className="img-file">
          <img
            src={props.renderImageFile(props.value.file?.name)}
            alt="img not load"
          />
        </div>
        <div className="box-content-file-title">
          <div className="content-file-title">{props.value.file?.name}</div>
          <Row className="box-information">
            <div className="file-size">
              {props.bytesToSize(props.value.file?.size)}
            </div>
            <div className="icon-download">
              <DownloadOutlined />
            </div>
          </Row>
        </div>
      </Row>
      <div className="date">
        <div>
          <span className="d-m-year">
            {props.value.date}-{props.value.month + 1}-{props.value.year}
          </span>{" "}
          <span className="m-hours">
            {props.value.hours}:{props.value.minutes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RenderFile;
