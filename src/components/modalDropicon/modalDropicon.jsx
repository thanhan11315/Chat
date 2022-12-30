import { Modal } from "antd";
import React, { useState } from "react";
import "./modalDropIcon.scss";
import AvatarAn from "../../assets/images/AvatarAn.jpg";

const ModalDropIcon = (props) => {
  const [showListIcon, setShowListIcon] = useState("all");

  // const changeShowListIcon = () => {};
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const valueLikeIcon = () => {
    if (props.value.drop_icon?.like_icon) {
      return props.value.drop_icon?.like_icon;
    } else {
      return "";
    }
  };

  console.log(valueLikeIcon());

  return (
    <>
      <Modal
        title="Biểu cảm"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="box-menu-icon-dropped">
          <div className="menu-icon-dropped">
            <div
              className={
                showListIcon === "all" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("all")}
            >
              Tất cả 5
            </div>
            <div
              className={
                showListIcon === "likeIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => {
                console.log(1);
                setShowListIcon("likeIcon");
                console.log(showListIcon);
              }}
            >
              <span className="icon">👍</span>
              <span>1</span>
            </div>
            <div
              className={
                showListIcon === "heartIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("heartIcon")}
            >
              <span className="icon">❤️</span>
              <span className="number">1</span>
            </div>
            <div
              className={
                showListIcon === "smileIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("smileIcon")}
            >
              <span className="icon">😄</span>
              <span>1</span>
            </div>
            <div
              className={
                showListIcon === "surpriseIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("surpriseIcon")}
            >
              <span className="icon">😱</span>
              <span className="number">1</span>
            </div>
            <div
              className={
                showListIcon === "cryIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("cryIcon")}
            >
              <span className="icon">😭</span>
              <span className="number">1</span>
            </div>
            <div
              className={
                showListIcon === "angryIcon" ? "box-icon active" : "box-icon"
              }
              onClick={() => setShowListIcon("angryIcon")}
            >
              <span className="icon">😡</span>
              <span className="number">1</span>
            </div>
          </div>
        </div>
        <div className="wrapper-member-drop">
          <div className="box-member-drop">
            <div className="member-drop">
              <div className="member">
                <div className="image">
                  <img src={AvatarAn} alt="not load"></img>
                </div>
                <div className="name">Lê Thanh Ân</div>
              </div>
              <div className="icon-drop">
                <div className="icon">
                  <span>👍</span>
                </div>
                <div className="icon">
                  <span>❤️</span>
                </div>
                <div className="icon">
                  <span>😄</span>
                </div>
                <div className="icon">
                  <span>😱</span>
                </div>
                <div className="icon">
                  <span>😭</span>
                </div>
                <div className="icon">
                  <span>😡</span>
                </div>
                <div className="number">
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalDropIcon;
