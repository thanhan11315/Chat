import React from "react";
import { Image } from "antd";

function ImageOrVideo(props) {
  const makeMinutes = (value) => {
    if (-1 < value && value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };
  return (
    <div className="hover-image-chat">
      <>
        {props.value.type === "image" && (
          <Image
            src={props.value.url}
            alt="img not load"
            style={{
              objectFit: "cover",
              maxHeight: "390px",
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
  );
}

export default ImageOrVideo;
