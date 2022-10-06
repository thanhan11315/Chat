import React from "react";
import "./ButtonScrollBottom.scss";
import { DownOutlined } from "@ant-design/icons";
function ButtonScrollBottom() {
  const element = document.querySelector(".box-nav-3 .box-chat");
  const handleClickButtonScrollBottom = () => {
    element.scrollTo(0, 0);
    document.querySelector(".button-scroll-bottom").classList.add("hidden");
  };
  if (element) {
    element.addEventListener("wheel", () => {
      if (element.scrollTop < -500) {
        document
          .querySelector(".button-scroll-bottom")
          .classList.remove("hidden");
      }
      if (element.scrollTop > -500) {
        document.querySelector(".button-scroll-bottom").classList.add("hidden");
      }
    });
  }

  return (
    <>
      <div className="box-button-scroll-bottom ">
        <div
          className="button-scroll-bottom hidden"
          onClick={handleClickButtonScrollBottom}
        >
          <DownOutlined />
        </div>
      </div>
    </>
  );
}

export default ButtonScrollBottom;
