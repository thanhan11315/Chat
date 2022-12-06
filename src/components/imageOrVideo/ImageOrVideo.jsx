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
  const handleClickFile = () => {
    document.querySelector(".box_iframe_footer").style.display = "block";
    // props.setUrlFile(
    //   `${renderLinkFile(props.value?.file?.name)}${props.value?.file?.url_file}`
    // );
    props.setValueFile(props.value);
  };
  return (
    <div className="hover-image-chat">
      <>
        {props.value.type === "image" && (
          <a
            href={props.value.url}
            target="iframe_file"
            onClick={handleClickFile}
          >
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
          </a>
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
