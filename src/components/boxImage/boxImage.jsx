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
    let dots = document.querySelectorAll(".image-show-list .img-sh-th");
    console.log(dots);
    if (slides.length > 1 && dots.length > 1) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
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

  const zoomIn = () => {
    const pics = document.querySelectorAll(".image-show-body .image-show img");
    pics.forEach((pic) => {
      const width = pic.width;
      const height = pic.height;
      console.log(height);
      console.log(width);
      pic.style.width = width + 100 + "px";
      pic.style.height = height + 100 + "px";
    });
  };
  const zoomOut = () => {
    const pics = document.querySelectorAll(".image-show-body .image-show img");
    pics.forEach((pic) => {
      const width = pic.clientWidth;
      const height = pic.clientHeight;
      console.log(width);
      console.log(height);
      pic.style.width = width - 100 + "px";
      pic.style.height = height - 100 + "px";
    });
  };

  let crotate = 0;

  const rotatedImage = (deg) => {
    crotate += deg;
    const pics = document.querySelectorAll(".image-show-body .image-show img");
    pics.forEach((pic) => {
      pic.style.transform = `rotate(${crotate}deg)`;
    });
  };

  var scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.querySelector(".image-show-body .image-show");

  function setTransform() {
    zoom.style.transform =
      "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
  }

  if (zoom) {
    zoom.onmousedown = function (e) {
      e.preventDefault();
      start = { x: e.clientX - pointX, y: e.clientY - pointY };
      panning = true;
    };
  }
  if (zoom) {
    zoom.onmouseup = function (e) {
      panning = false;
    };
  }

  if (zoom) {
    zoom.onmousemove = function (e) {
      e.preventDefault();
      if (!panning) {
        return;
      }
      pointX = e.clientX - start.x;
      pointY = e.clientY - start.y;
      setTransform();
    };
  }

  if (zoom) {
    zoom.onwheel = function (e) {
      e.preventDefault();
      var xs = (e.clientX - pointX) / scale,
        ys = (e.clientY - pointY) / scale,
        delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
      delta > 0 ? (scale *= 1.2) : (scale /= 1.2);
      pointX = e.clientX - xs * scale;
      pointY = e.clientY - ys * scale;

      setTransform();
    };
  }
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
                <div className="box-btn-left">
                  <div
                    className="image-show-btn-left"
                    onClick={() => {
                      plusSlides(1);
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
                <div className="box-btn-right">
                  <div
                    className="image-show-btn-right"
                    onClick={() => {
                      plusSlides(-1);
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
            <div
              onClick={() => {
                rotatedImage(-90);
              }}
            >
              <UndoOutlined />
            </div>
            <div
              onClick={() => {
                rotatedImage(90);
              }}
            >
              <RedoOutlined />
            </div>
            <div
              onClick={() => {
                zoomIn();
              }}
            >
              <ZoomInOutlined />
            </div>
            <div
              onClick={() => {
                zoomOut();
              }}
            >
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
