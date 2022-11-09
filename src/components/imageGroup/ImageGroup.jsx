import React from "react";
import "./ImageGroup.scss";
function ImageGroup(props) {
  return (
    <>
      <div className="box-image-group ">
        {props.dataUserFriend?.members?.length <= 3 && (
          <>
            <div className="box-image image-1-1">
              {props.dataUserFriend?.members[0]?.avatar && (
                <img
                  src={props.dataUserFriend?.members[0]?.avatar}
                  alt="img not load"
                />
              )}
            </div>
            <div className="box-image image-1-2">
              {props.dataUserFriend?.members[1]?.avatar && (
                <img
                  src={props.dataUserFriend?.members[1]?.avatar}
                  alt="img not load"
                />
              )}
            </div>
            <div className="box-image image-1-3">
              {props.dataUserFriend?.members[2]?.avatar && (
                <img
                  src={props.dataUserFriend?.members[2]?.avatar}
                  alt="img not load"
                />
              )}
            </div>
          </>
        )}
        {props.dataUserFriend?.members?.length >= 4 && (
          <>
            <div className="box-image image-2-1">
              <img
                src={props.dataUserFriend?.members[0]?.avatar}
                alt="img not load"
              />
            </div>
            <div className="box-image image-2-2">
              <img
                src={props.dataUserFriend?.members[1]?.avatar}
                alt="img not load"
              />
            </div>
            <div className="box-image image-2-3">
              <img
                src={props.dataUserFriend?.members[2]?.avatar}
                alt="img not load"
              />
            </div>
            <div className="box-image image-2-4">
              {props.dataUserFriend?.members?.length === 4 ? (
                <img
                  src={props.dataUserFriend?.members[3]?.avatar}
                  alt="img not load"
                />
              ) : (
                <div className="image-3-4">
                  <span>{props.dataUserFriend?.members.length}</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ImageGroup;
