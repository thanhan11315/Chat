import React from "react";
// import { Image } from "antd";

function ImageOrVideo(props) {
  const makeMinutes = (value) => {
    if (-1 < value && value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };
  const handleClickImage = (value) => {
    document.querySelector(".box-show-image").style.display = "block";
    props.setValueImage(value);
    // props.setUrlFile(
    //   `${renderLinkFile(props.value?.file?.name)}${props.value?.file?.url_file}`
    // );
  };
  return (
    <>
      {props.size === "one" && (
        <div className="hover-image-chat">
          <>
            {props.value.type === "image" && (
              <img
                src={props.value.url}
                alt="img not load"
                onClick={() => {
                  handleClickImage(props.value);
                }}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  marginBottom: "8px",
                  borderRadius: "10px",
                }}
              />
            )}
          </>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="date">
              {props.value.hours}:{makeMinutes(props.value.minutes)}
            </div>
            <div className="date">Đã gửi</div>
          </div>
        </div>
      )}
      {props.size === "tickMessage" && (
        <div className="hover-image-chat">
          <>
            {props.value.type === "image" && (
              <img
                src={props.value.url}
                alt="img not load"
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  marginBottom: "8px",
                  borderRadius: "10px",
                }}
              />
            )}
          </>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="date">
              {props.value.hours}:{makeMinutes(props.value.minutes)}
            </div>
            <div className="date">Đã gửi</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageOrVideo;
