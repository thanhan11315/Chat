import React from "react";
import { Image } from "antd";

function ImageOrVideo(props) {
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
      <div className="date">
        {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
        {props.value.hours}:{props.value.minutes}
      </div>
    </div>
  );
}

export default ImageOrVideo;
