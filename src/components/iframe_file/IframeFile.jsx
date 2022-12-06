import React from "react";
import "./IframeFile.scss";
import { CloseOutlined, DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";
function IframeFile(props) {
  const [showBoxIframe, setshowBoxIframe] = useState(true);
  const handleClicCloseIframeFile = () => {
    const element = document.querySelector(".box_iframe_footer");
    element.style.display = "none";
    props.setUrlFile("");
    setshowBoxIframe(false);
    setTimeout(() => {
      setshowBoxIframe(true);
    }, 100);
    console.log(1);
  };
  return (
    <>
      <div className="box_iframe_footer">
        {showBoxIframe && (
          <div className="box-iframe">
            <iframe name="iframe_file" className="iframe-file" title="file" />
          </div>
        )}
        <div className="box-footer">
          <div className="box-1">
            <div className="image">
              <img src={props.valueFile.avatar} alt="img not load" />
            </div>
            <div className="box-1-1">
              <div className="title">{props.valueFile?.file?.name}</div>
              <div className="content">
                {`${props.valueFile?.name} - ${props.valueFile?.date}/${
                  props.valueFile?.month
                }/${props.valueFile?.year} lúc ${props.valueFile?.hours}:${
                  props.valueFile?.minutes
                } - ${props.bytesToSize(props.valueFile?.file?.size)}`}
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="icon-download">
              <DownloadOutlined />
            </div>
            <div className="brick" />
            <div className="icon-close" onClick={handleClicCloseIframeFile}>
              <CloseOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IframeFile;
