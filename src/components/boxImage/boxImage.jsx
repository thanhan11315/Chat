import {
  CloseOutlined,
  DownloadOutlined,
  LayoutOutlined,
  RedoOutlined,
  ShareAltOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import React from "react";
import "./boxImage.scss";
import ImageVideo from "../../assets/images/Video.png";
import AvatarAnLe from "../../assets/images/AvatarAnLe.jpg";

function BoxImage(props) {
  const handleClicCloseIframeFile = () => {
    const element = document.querySelector(".box-show-image");
    element.style.display = "none";
  };
  return (
    <>
      <div className="box-show-image">
        <div className="box-image-1">
          <div className="image-show-title">
            <div className="box-1">Cloud của tôi</div>
            <div className="box-2" onClick={handleClicCloseIframeFile}>
              <CloseOutlined />
            </div>
          </div>
          <div className="box-show-image-content-history">
            <div className="image-show-content-layout">
              <div className="image-show-body">
                <div className="image-show-btn-left"></div>
                <div className="image-show">
                  <img src={ImageVideo} alt="not load" />
                </div>
                <div className="image-show-btn-right"></div>
              </div>
            </div>
            <div className="image-history">
              <div className="timeline-slider">
                <div className="pivot-top"></div>
                <div className="line"></div>
                <div className="pivot-bottom"></div>
              </div>
              <div className="image-show-list">
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img src={ImageVideo} alt="not load" />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img src={ImageVideo} alt="not load" />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img src={ImageVideo} alt="not load" />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img src={ImageVideo} alt="not load" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <div className="box-1">
            <div className="image">
              {/* <img src={props.valueFile.avatar} alt="not load" /> */}
              <img src={AvatarAnLe} alt="not load" />
            </div>
            <div className="box-1-1">
              {/* <div className="title">{props.valueFile?.file?.name}</div>
              <div className="content">
                {`${props.valueFile?.name} - ${props.valueFile?.date}/${
                  props.valueFile?.month
                }/${props.valueFile?.year} lúc ${props.valueFile?.hours}:${
                  props.valueFile?.minutes
                } - ${props.bytesToSize(props.valueFile?.file?.size)}`}
              </div> */}
              <div className="title">Lê Thanh Ân</div>
              <div className="content">15:26 Hôm qua</div>
            </div>
          </div>
          <div className="box-2">
            <div>
              <ShareAltOutlined />
            </div>
            <div>
              <DownloadOutlined />
            </div>
            <div>
              <UndoOutlined />
            </div>
            <div>
              <RedoOutlined />
            </div>
            <div>
              <ZoomInOutlined />
            </div>
            <div>
              <ZoomOutOutlined />
            </div>
          </div>
          <div className="box-3">
            <div>
              <LayoutOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxImage;
