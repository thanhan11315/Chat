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
  const [showListImage, setShowListImage] = useState(true);
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
            valueChat.type === "image" && !valueChat.delete && !valueChat.evict
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
    );

    const heightElementImageShowList = elementImageShowList.offsetHeight;

    const numberImage = heightElementImageShowList / 145;

    console.log(numberImage);
    console.log(heightElementImageShowList);
    if (valueChatsImage.length >= numberImage) {
      elementImageShowList.style.justifyContent = "space-between";
    }
    if (valueChatsImage.length < numberImage) {
      elementImageShowList.style.justifyContent = "flex-start";
    }
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

  const showSlide = (n) => {
    if (n >= 0 && n <= valueChatsImage.length - 1) {
      props.setValueImage(valueChatsImage[n]);
    }
  };

  const plusSlides = (sizeIndex) => {
    const index =
      valueChatsImage &&
      valueChatsImage.findIndex((value) => value.id === props.valueImage.id);
    showSlide(sizeIndex + index);
  };

  let scale = 1,
    crotate = 0,
    panning = false,
    pointX = 0,
    pointY = 0,
    start = { x: 0, y: 0 },
    zoom = document.querySelector(".image-show-body .image-show");

  const transformStart = () => {
    scale = 1;
    crotate = 0;
    panning = false;
    pointX = 0;
    pointY = 0;
    start = { x: 0, y: 0 };
    setTransform();
  };

  function setTransform() {
    if (!zoom) {
      zoom = document.querySelector(".image-show-body .image-show");
    }
    if (zoom && scale > 1) {
      zoom.style.transform =
        "translate(" +
        pointX +
        "px, " +
        pointY +
        "px) scale(" +
        scale +
        ") rotate(" +
        crotate +
        "deg)";
    }
    if (zoom && scale <= 1) {
      scale = 1;
      panning = false;
      pointX = 0;
      pointY = 0;
      start = { x: 0, y: 0 };
      zoom.style.transform =
        "translate(" +
        pointX +
        "px, " +
        pointY +
        "px) scale(" +
        scale +
        ") rotate(" +
        crotate +
        "deg)";
    }
  }

  useEffect(() => {
    transformStart();
  }, [props.valueImage]); // eslint-disable-line react-hooks/exhaustive-deps

  const rotatedImage = (deg) => {
    crotate += deg;
    setTransform();
  };

  const zoomOnmousedown = (e) => {
    e.preventDefault();
    start = { x: e.clientX - pointX, y: e.clientY - pointY };
    panning = true;
  };
  const zoomOnmouseup = (e) => {
    e.preventDefault();
    panning = false;
  };

  const zoomOnmousemove = function (e) {
    e.preventDefault();
    if (!panning) {
      return;
    }
    pointX = e.clientX - start.x;
    pointY = e.clientY - start.y;
    setTransform();
  };

  const zoomOnwheel = (e) => {
    e.preventDefault();
    var xs = (e.clientX - pointX) / scale,
      ys = (e.clientY - pointY) / scale,
      delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    delta > 0 ? (scale *= 1.05) : (scale /= 1.05);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    setTransform();
  };

  const onWheelNavRightImage = (e) => {
    e.preventDefault();
    const delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    if (delta > 0) {
      plusSlides(-1);
    } else {
      plusSlides(1);
    }
  };

  const zoomIn = (index) => {
    if (zoom) {
      scale *= index;
      setTransform();
    }
  };

  const zoomOut = (index) => {
    if (zoom) {
      scale /= index;
      setTransform();
    }
  };

  const changeWidthBoxImage = (boolean) => {
    const element = document.querySelector(
      ".box-show-image .box-image-1 .box-show-image-content-history .image-show-content-layout"
    );
    if (boolean) {
      element.style.width = "calc(100% - 160px)";
    } else {
      element.style.width = "100%";
    }
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
                {props.valueImage && (
                  <div
                    className="image-show"
                    onMouseDown={(e) => {
                      zoomOnmousedown(e);
                    }}
                    onMouseUp={(e) => {
                      zoomOnmouseup(e);
                    }}
                    onMouseMove={(e) => {
                      zoomOnmousemove(e);
                    }}
                    onWheel={(e) => {
                      zoomOnwheel(e);
                    }}
                  >
                    <img src={props.valueImage.url} alt="not load" />
                  </div>
                )}
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
            <div
              className={
                showListImage ? "image-history show" : "image-history hidden"
              }
              onWheel={(e) => {
                onWheelNavRightImage(e);
              }}
            >
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
            <div
              onClick={() => {
                props.handleClickShareInBoxImage(props.valueImage);
                handleClicCloseIframeFile();
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
                zoomIn(1.1);
              }}
            >
              <ZoomInOutlined />
            </div>
            <div
              onClick={() => {
                zoomOut(1.1);
              }}
            >
              <ZoomOutOutlined />
            </div>
          </div>
          <div className="box-3">
            <div
              onClick={() => {
                setShowListImage(!showListImage);
                changeWidthBoxImage(!showListImage);
              }}
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
