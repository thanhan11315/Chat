import React from "react";
import { Row } from "antd";
import { MessageOutlined, DownOutlined } from "@ant-design/icons";
import "./ListGhim.scss";
function Ghim(props) {
  return (
    <Row className="box-ghim">
      <Row className="box-1">
        {props.valueListGhim[0].type === "image" ? (
          <>
            <div className="image-box">
              <div className="border-right" />
              <img alt="img not load" src={props.valueListGhim[0].url} />
            </div>
          </>
        ) : props.valueListGhim[0].type === "video" ? (
          <>
            <div className="image-box">
              <div className="border-right" />
              <video alt="video not load" src={props.valueListGhim[0].url} />
            </div>
          </>
        ) : props.valueListGhim[0].file ? (
          <>
            <div className="image-box">
              <div className="border-right" />
              <img
                alt="img not load"
                src={props.renderImageFile(props.valueListGhim[0].file.name)}
              />
            </div>
          </>
        ) : (
          <div className="image-message">
            <MessageOutlined />
          </div>
        )}
        <div className="box-1-1">
          <div className="title">
            {props.valueListGhim[0]?.type === "image" ? (
              <div className="content">[Hình ảnh]</div>
            ) : props.valueListGhim[0]?.type === "video" ? (
              <div className="content">[Video]</div>
            ) : props.valueListGhim[0]?.file ? (
              <div className="content">[File]</div>
            ) : (
              <div className="content">Tin nhắn</div>
            )}
          </div>
          <div className="status">
            <div className="content">
              {`${props.valueListGhim[0]?.name}: ${props.valueListGhim[0]?.content}`}
            </div>
          </div>
        </div>
      </Row>
      {props.lengthGhim > 1 && (
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
      )}
    </Row>
  );
}

export default Ghim;
