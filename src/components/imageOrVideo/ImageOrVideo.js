import React from "react";

function ImageOrVideo(props) {
  return (
    <div className="hover-image-chat">
      {props.value.type === "video" ? (
        <video
          controls
          src={props.value.url}
          alt="video not load"
          style={{
            objectFit: "cover",
            maxHeight: "390px",
            cursor: "pointer",
            marginBottom: "8px",
            borderRadius: "10px",
          }}
        />
      ) : (
        <>
          <img
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
        </>
      )}
      <div className="date">
        {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
        {props.value.hours}:{props.value.minutes}
      </div>
    </div>
  );
}

export default ImageOrVideo;
