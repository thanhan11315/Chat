import {
  CloseOutlined,
  DownloadOutlined,
  DownOutlined,
  LayoutOutlined,
  RedoOutlined,
  ShareAltOutlined,
  UndoOutlined,
  UpOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import React from "react";
import "./boxImage.scss";
import ImageVideo from "../../assets/images/Video.png";
import AvatarAnLe from "../../assets/images/AvatarAnLe.jpg";
import AvatarAnhHoai from "../../assets/images/AvatarAnhHoai.jpg";
import AvatarCTO from "../../assets/images/AvatarCTO.jpg";
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";

function BoxImage() {
  const handleClicCloseIframeFile = () => {
    const element = document.querySelector(".box-show-image");
    element.style.display = "none";
  };

  let slideIndex = 1;

  const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".image-show-body .image-show");
    console.log(slides);
    console.log("1");
    // let dots = document.querySelectorAll(".image-show-list .img-sh-th");
    // console.log(dots);  && dots.length > 1
    if (slides.length > 1) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace("active", "");
      // }
      slides[slideIndex - 1].style.display = "block";
      // dots[slideIndex - 1].className += "active";
    }
  };

  showSlides(slideIndex);

  const plusSlides = (n) => {
    console.log(1);
    showSlides((slideIndex += n));
  };

  const currentSlide = (n) => {
    console.log(1);
    showSlides((slideIndex = n));
  };
  return (
    <>
      <div className="box-show-image">
        <div className="box-image-1">
          <div className="image-show-title">
            <div className="box-1">Cloud của tôi</div>
            <div
              className="box-2"
              onClick={() => {
                handleClicCloseIframeFile();
                console.log(1);
              }}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="box-show-image-content-history">
            <div className="image-show-content-layout">
              <div className="image-show-body">
                <div className="box-btn">
                  <div
                    className="image-show-btn-left"
                    onClick={() => {
                      plusSlides(-1);
                    }}
                  >
                    <DownOutlined />
                  </div>
                </div>
                <div className="image-show">
                  <img src={ImageVideo} alt="not load" />
                </div>
                <div className="image-show">
                  <img src={AvatarAnhHoai} alt="not load" />
                </div>
                <div className="image-show">
                  <img src={AvatarCTO} alt="not load" />
                </div>
                <div className="image-show">
                  <img src={SuperShipLogo} alt="not load" />
                </div>
                <div className="box-btn">
                  <div
                    className="image-show-btn-right"
                    onClick={() => {
                      plusSlides(1);
                    }}
                  >
                    <UpOutlined />
                  </div>
                </div>
              </div>
            </div>
            <div className="image-history">
              <div className="timeline-slider">
                <div className="pivot-top"></div>
                <div className="pivot-handle"></div>
                <div className="line"></div>
                <div className="pivot-bottom"></div>
              </div>
              <div className="image-show-list">
                <div
                  className="image-show-thumb-legend"
                  onClick={() => {
                    console.log(1);
                  }}
                >
                  12/6
                </div>
                <div className="img-sh-th">
                  <img
                    src={ImageVideo}
                    alt="not load"
                    onClick={() => {
                      console.log(1);
                      currentSlide(1);
                    }}
                  />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img
                    src={AvatarAnhHoai}
                    alt="not load"
                    onClick={() => currentSlide(2)}
                  />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img
                    src={AvatarCTO}
                    alt="not load"
                    onClick={() => currentSlide(3)}
                  />
                </div>
                <div className="image-show-thumb-legend">12/6</div>
                <div className="img-sh-th">
                  <img
                    src={SuperShipLogo}
                    alt="not load"
                    onClick={() => currentSlide(4)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer" onClick={console.log(1)}>
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
            <div
              onClick={() => {
                console.log(1);
              }}
            >
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
