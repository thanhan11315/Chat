import React from "react";
import { Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./RenderFile.scss";

function RenderFile(props) {
  const renderLinkFile = (value) => {
    if (value?.split(".").pop()) {
      switch (value?.split(".").pop()) {
        case "xlsx":
          return "https://view.officeapps.live.com/op/embed.aspx?src=";
        case "docx":
          return "https://view.officeapps.live.com/op/embed.aspx?src=";
        case "pdf":
          return "https://drive.google.com/viewerng/viewer?url=";
        default:
          return "https://drive.google.com/viewerng/viewer?url=";
      }
    }
  };
  const handleClickFile = () => {
    document.querySelector(".box_iframe_footer").style.display = "block";
    props.setUrlFile(
      `${renderLinkFile(props.value?.file?.name)}${props.value?.file?.url}`
    );
    props.setValueFile(props.value);
  };
  const handleClickDownLoadFile = (e) => {
    e.stopPropagation();
  };

  return (
    <a href={props.urlFile} target="iframe_file" onClick={handleClickFile}>
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
              <div
                className="icon-download"
                onClick={(e) => handleClickDownLoadFile(e)}
              >
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
    </a>
  );
}

export default RenderFile;
