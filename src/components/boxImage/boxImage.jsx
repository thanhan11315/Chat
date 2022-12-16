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
import React, { useEffect, useState } from "react";
import "./boxImage.scss";

function BoxImage(props) {
  // const [showListImage, setShowListImage] = useState(true);
  const handleClicCloseIframeFile = () => {
    const element = document.querySelector(".box-show-image");
    element.style.display = "none";
  };

  const [valueChatsImage, setValueChatsImage] = useState("");

  useEffect(() => {
    if (props.valueChats) {
      setValueChatsImage(
        props.valueChats?.filter(
          (valueChat) =>
            valueChat.type === "image" && !valueChat.delete && !valueChat.evicts
        )
      );
    }
  }, [props.valueChats]); // eslint-disable-line react-hooks/exhaustive-deps

  // const [slideIndex, setSlideIndex] = useState(1);

  const positionPivotHandle = (index) => {
    console.log(123);
    const lengthValueImage = valueChatsImage.length;
    let positionPercentage = (100 * (index + 1)) / lengthValueImage;
    if (index === 0) {
      positionPercentage = 0;
    }
    const elementPivotHandle = document.querySelector(
      ".timeline-slider .pivot-handle"
    );

    if (index !== lengthValueImage - 1) {
      elementPivotHandle.style.top = `${positionPercentage}%`;
    } else {
      elementPivotHandle.style.top = "calc(100% - 12px)";
    }
  };

  useEffect(() => {
    const index =
      valueChatsImage &&
      valueChatsImage.findIndex((value) => value.id === props.valueImage?.id);
    const dots = document.querySelectorAll(".image-show-list .img-sh-th");
    if (dots) {
      dots.forEach((dot) => {
        dot?.classList?.remove("active");
      });
      dots[index]?.classList?.add("active");
    }
    // Change position dots
    const boxDots = document.querySelectorAll(".image-show-list .box-dots-img");

    const elementImageShowList = document.querySelector(
      ".image-history .image-show-list"
    ).offsetHeight;

    const numberImage = elementImageShowList / 145;

    console.log(numberImage);

    if (valueChatsImage.length - index > numberImage - 1) {
      let i = -1;
      boxDots.forEach((dot) => {
        dot.style.display = "block";
      });
      boxDots.forEach((dot) => {
        i += 1;
        if (i < index || i > index + numberImage - 1) {
          dot.style.display = "none";
        }
      });
    }
    const btnRight = document.querySelector(
      ".box-btn-right .image-show-btn-right"
    );
    const btnLeft = document.querySelector(
      ".box-btn-left .image-show-btn-left"
    );
    console.log(btnRight);
    if (btnRight && btnLeft) {
      if (index === 0) {
        btnRight.style.cursor = "not-allowed";
      } else {
        btnRight.style.cursor = "pointer";
      }
      if (index === valueChatsImage.length - 1) {
        btnLeft.style.cursor = "not-allowed";
      } else {
        btnLeft.style.cursor = "pointer";
      }
    }
    positionPivotHandle(index);
  }, [props.valueImage]); // eslint-disable-line react-hooks/exhaustive-deps

  // const showSlides = (n) => {
  //   let i;
  //   let slides = document.querySelectorAll(".image-show-body .image-show");
  //   console.log(slides);
  //   console.log("1");
  //   let dots = document.querySelectorAll(".image-show-list .img-sh-th");
  //   console.log(dots);
  //   if (slides.length > 1 && dots.length > 1) {
  //     if (n > slides.length) {
  //       setSlideIndex(1);
  //     }
  //     if (n < 1) {
  //       setSlideIndex(slides.length);
  //     }
  //     for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //     }
  //     for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace("active", "");
  //     }
  //     slides[slideIndex - 1].style.display = "block";
  //     dots[slideIndex - 1].classList.add("active");
  //   }
  // };

  const showSlide = (n) => {
    console.log(valueChatsImage.length);
    console.log(n);
    // if (n > valueChatsImage.length - 1) {
    //   props.setValueImage(valueChatsImage[n - 1]);
    // }
    // if (n < 0) {
    //   props.setValueImage(valueChatsImage[valueChatsImage.length - 1]);
    // }
    if (n >= 0 && n <= valueChatsImage.length - 1) {
      props.setValueImage(valueChatsImage[n]);
    }
  };

  const plusSlides = (sizeIndex) => {
    const index =
      valueChatsImage &&
      valueChatsImage.findIndex((value) => value.id === props.valueImage.id);
    showSlide(sizeIndex + index);
    console.log(sizeIndex + index);
  };

  // const currentSlide = (n) => {};

  let crotate = 0;

  const rotatedImage = (deg) => {
    crotate += deg;
    const pics = document.querySelectorAll(".image-show-body .image-show img");
    pics.forEach((pic) => {
      pic.style.transform = `rotate(${crotate}deg)`;
    });
  };

  let scale = 1,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.querySelector(".image-show-body .image-show");

  function setTransform() {
    zoom.style.transform =
      "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    console.log(
      "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")"
    );
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
      e.preventDefault();
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
      console.log(e);
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

  let zoomz = 1;
  const zoomSpeed = 0.1;

  const zoomIn = () => {
    const pics = document.querySelectorAll(".image-show-body .image-show");
    pics.forEach((pic) => {
      pic.style.transform = `scale(${(zoomz += zoomSpeed)})`;
    });
  };

  const zoomOut = () => {
    const pics = document.querySelectorAll(".image-show-body .image-show");
    pics.forEach((pic) => {
      pic.style.transform = `scale(${(zoomz -= zoomSpeed)})`;
    });
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
                {/* {valueChatsImage &&
                      valueChatsImage.map((valueChat) => {
                        return ( */}
                {console.log(props.valueImage)}
                {props.valueImage && (
                  <div className="image-show">
                    <img src={props.valueImage.url} alt="not load" />
                  </div>
                )}
                {/* )
                        );
                      })} */}
                {/* <div className="image-show">
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
                      </div> */}
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
                {valueChatsImage &&
                  valueChatsImage.map((valueChat, key) => {
                    return (
                      valueChat.type === "image" && (
                        <>
                          <div className="box-dots-img" key={key}>
                            <div className="image-show-thumb-legend">{`${valueChat.date}/${valueChat.month}`}</div>
                            <div className="img-sh-th">
                              <img
                                src={valueChat.url}
                                alt="not load"
                                onClick={() => {
                                  props.setValueImage(valueChat);
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="box-footer">
          <div className="box-1">
            <div className="image">
              <img src={props.valueImage?.avatar} alt="not load" />
            </div>
            <div className="box-1-1">
              <div className="title">{props.valueImage?.name}</div>
              <div className="content">
                {`${props.valueImage?.date}/${props.valueImage?.month}/${props.valueImage?.year} lúc ${props.valueImage?.hours}:${props.valueImage?.minutes} `}
              </div>
            </div>
          </div>
          <div className="box-2">
            <div>
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
            <div
            // onClick={() => {
            //   setShowListImage(!showListImage);
            // }}
            >
              <LayoutOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxImage;
