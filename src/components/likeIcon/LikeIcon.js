import React from "react";
import "./LikeIcon.css";

function LikeIcon(props) {
  return (
    <>
      <div className="content-chat">
        <div className="like-icon">{props.value.content}</div>
        <div className="date">
          {/* {value.date}-{value.month + 1}-{value.year}{" "} */}
          {props.value.hours}:{props.value.minutes}
        </div>
      </div>
    </>
  );
}

export default LikeIcon;
