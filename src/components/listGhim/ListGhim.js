import React from "react";
import "./ListGhim.css";
function ListGhim(props) {
  return (
    <>
      <div className="box-1-1">
        <div className="title">Tin nhắn</div>
        <div className="status">
          <div className="content" key={props.key}>
            {`${props.value.name} : ${props.value.content}`}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListGhim;
