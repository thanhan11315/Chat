import React from "react";
import { Row } from "antd";
import { MessageOutlined, DownOutlined } from "@ant-design/icons";
import "./ListGhim.css";
function Ghim(props) {
  return (
    <Row className="box-ghim">
      <Row className="box-1">
        <div className="image">
          {props.valueListGhim[props.lengthGhim - 1].type === "image" ? (
            <img
              alt="img not load"
              src={props.valueListGhim[props.lengthGhim - 1].url}
            />
          ) : props.valueListGhim[props.lengthGhim - 1].type === "video" ? (
            <video
              alt="video not load"
              src={props.valueListGhim[props.lengthGhim - 1].url}
            />
          ) : props.valueListGhim[props.lengthGhim - 1].file ? (
            <img
              alt="img not load"
              src={props.renderImageFile(
                props.valueListGhim[props.lengthGhim - 1].file.name
              )}
            />
          ) : (
            <MessageOutlined />
          )}
        </div>
        <div className="box-1-1">
          <div className="title">
            {props.valueListGhim[props.lengthGhim - 1]?.type === "image" ? (
              <div className="content">[Hình ảnh]</div>
            ) : props.valueListGhim[props.lengthGhim - 1]?.type === "video" ? (
              <div className="content">[Video]</div>
            ) : props.valueListGhim[props.lengthGhim - 1]?.file ? (
              <div className="content">[File]</div>
            ) : (
              <div className="content">Tin nhắn</div>
            )}
          </div>
          <div className="status">
            <div className="content">
              {`${props.valueListGhim[props.lengthGhim - 1]?.name}: ${
                props.valueListGhim[props.lengthGhim - 1]?.content
              }`}
            </div>
          </div>
        </div>
      </Row>
      {props.lengthGhim > 1 ? (
        <div className="box-2">
          <div
            className="ghim"
            onClick={() => {
              document.querySelector(".box-ghim-1").style.display = "none";
              document.querySelector(".box-ghim-2").style.display = "block";
            }}
          >
            {props.lengthGhim - 1} ghim khác <DownOutlined />{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </Row>
  );
}

export default Ghim;
