import React from "react";
import "./ImageGroup.scss";
function ImageGroup(props) {
  return (
    <>
      <div className="box-image-group">
        <div className="image-1">
          <img
            src={props.dataUserFriend?.members[0].avatar}
            alt="img not load"
          />
        </div>
        <div className="image-2">
          {" "}
          <img
            src={props.dataUserFriend?.members[1].avatar}
            alt="img not load"
          />
        </div>
        <div className="image-3">
          {" "}
          <img
            src={props.dataUserFriend?.members[2].avatar}
            alt="img not load"
          />
        </div>
      </div>
    </>
  );
}

export default ImageGroup;
