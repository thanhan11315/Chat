import React from "react";
import { Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./RenderFile.scss";

function RenderFile(props) {
  const makeMinutes = (value) => {
    if (-1 < value && value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };
  // const [playVideo, setPlayVideo] = useState(false);
  const renderLinkFile = (value) => {
    if (value?.split(".").pop()) {
      switch (value?.split(".").pop()) {
        case "xlsx":
          return "https://view.officeapps.live.com/op/embed.aspx?src=";
        case "docx":
          return "https://view.officeapps.live.com/op/embed.aspx?src=";
        case "pdf":
          return "https://drive.google.com/viewerng/viewer?url=";
        case "mp4":
          return "";
        case "avi":
          return "";
        case "mov":
          return "";
        case "flv":
          return "";
        case "wmv":
        default:
          return "https://drive.google.com/viewerng/viewer?url=";
      }
    }
  };
  const handleClickFile = () => {
    document.querySelector(".box_iframe_footer").style.display = "block";
    props.setUrlFile(
      `${renderLinkFile(props.value?.file?.name)}${props.value?.file?.url_file}`
    );
    props.setValueFile(props.value);
  };
  const handleClickDownLoadFile = (e) => {
    e.stopPropagation();
  };
  // const handleClickPlayVideo = () => {
  //   setPlayVideo(true);
  // };

  const isVideoFile = (value) => {
    if (value?.split(".").pop()) {
      switch (value?.split(".").pop()) {
        case "mp4":
          return true;
        case "avi":
          return true;
        case "mov":
          return true;
        case "flv":
          return true;
        case "wmv":
          return true;
        default:
          return false;
      }
    }
  };

  return (
    <>
      {!isVideoFile(props.value?.file?.name) && (
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
                <div className="content-file-title">
                  {props.value.file?.name}
                </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="date">
                <div>
                  <span className="d-m-year">
                    {props.value.date}-{props.value.month + 1}-
                    {props.value.year}
                  </span>{" "}
                  <span className="m-hours">
                    {props.value.hours}:{makeMinutes(props.value.minutes)}
                  </span>
                </div>
              </div>
              <div className="date sented">Đã gửi</div>
            </div>
          </div>
        </a>
      )}
      {isVideoFile(props.value?.file?.name) && (
        <div className="box-file">
          {/* {!props.navRight && (
            <>
              {!playVideo && (
                <div className="box-fake-video" onClick={handleClickPlayVideo}>
                  <div className="knot">
                    <PlayCircleOutlined />
                  </div>
                </div>
              )}
              {playVideo && (
                <video
                  controls
                  src={props.value?.file?.url_file}
                  alt="video not load"
                  style={{
                    objectFit: "cover",
                    maxWidth: "296px",
                    cursor: "pointer",
                    marginBottom: "8px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </>
          )} */}
          <a
            href={props.value?.file?.url_file}
            target="iframe_file"
            onClick={handleClickFile}
          >
            <Row className="box-content-file">
              <div className="img-file">
                <img
                  src={props.renderImageFile(props.value.file?.name)}
                  alt="img not load"
                />
              </div>
              <div className="box-content-file-title">
                <div className="content-file-title">
                  {props.value.file?.name}
                </div>
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
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="date">
              <div>
                <span className="d-m-year">
                  {props.value.date}-{props.value.month + 1}-{props.value.year}
                </span>{" "}
                <span className="m-hours">
                  {props.value.hours}:{makeMinutes(props.value.minutes)}
                </span>
              </div>
            </div>
            <div>
              {/* {window.URL.revokeObjectURL(
                URL.createObjectURL(props.value?.file?.file)
              )} */}
            </div>
            <div className="date sented">Đã gửi</div>
          </div>
        </div>
      )}
    </>
  );
}

export default RenderFile;
