import React from "react";
import "./ListGhim.css";
function Ghim(props) {
  return (
    <div className="box-1-1">
      <div className="title">Tin nhắn</div>
      <div className="status">
        <div className="content">
          {`${props.headerBoxChat?.ghim[props.lengthghim - 1]?.name}: ${
            props.headerBoxChat?.ghim[props.lengthghim - 1]?.content
          }`}
        </div>
      </div>
    </div>
  );
}

export default Ghim;
