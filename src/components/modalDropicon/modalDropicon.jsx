import { Modal } from "antd";
import React, { useState } from "react";
import "./modalDropIcon.scss";

const ModalDropIcon = (props) => {
  const [showListIcon, setShowListIcon] = useState("all");

  // const changeShowListIcon = () => {};
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  const quantityOneIcon = (values, name) => {
    let total = 0;
    if (values) {
      if (name === "like_icon") {
        values.forEach((value) => {
          if (value.like_icon > 0) {
            total += value.like_icon;
          }
        });
        return total;
      }
      if (name === "heart_icon") {
        values.forEach((value) => {
          if (value.heart_icon > 0) {
            total += value.heart_icon;
          }
        });
        return total;
      }
      if (name === "smile_icon") {
        values.forEach((value) => {
          if (value.smile_icon > 0) {
            total += value.smile_icon;
          }
        });
        return total;
      }
      if (name === "surprise_icon") {
        values.forEach((value) => {
          if (value.surprise_icon > 0) {
            total += value.surprise_icon;
          }
        });
        return total;
      }
      if (name === "cry_icon") {
        values.forEach((value) => {
          if (value.cry_icon > 0) {
            total += value.cry_icon;
          }
        });
        return total;
      }
      if (name === "angry_icon") {
        values.forEach((value) => {
          if (value.angry_icon > 0) {
            total += value.angry_icon;
          }
        });
        return total;
      }
    }
  };

  const quantityIconOnePerson = (value) => {
    let total = 0;
    if (value) {
      if (value.like_icon) {
        total += value.like_icon;
      }
      if (value.heart_icon) {
        total += value.heart_icon;
      }
      if (value.smile_icon) {
        total += value.smile_icon;
      }
      if (value.surprise_icon) {
        total += value.surprise_icon;
      }
      if (value.cry_icon) {
        total += value.cry_icon;
      }
      if (value.angry_icon) {
        total += value.angry_icon;
      }
      return total;
    }
  };

  const showIcon = (nameShow) => {
    if (showListIcon === "all" || showListIcon === nameShow) {
      return true;
    } else {
      return false;
    }
  };

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
              Tất cả {props.quantityIcon}
            </div>
            {props.incluleIcon(props.value.drop_icon, "like_icon") && (
              <div
                className={
                  showListIcon === "like_icon" ? "box-icon active" : "box-icon"
                }
                onClick={() => {
                  console.log(1);
                  setShowListIcon("like_icon");
                  console.log(showListIcon);
                }}
              >
                <span className="icon">👍</span>
                <span>
                  {quantityOneIcon(props.value.drop_icon, "like_icon")}
                </span>
              </div>
            )}
            {props.incluleIcon(props.value.drop_icon, "heart_icon") && (
              <div
                className={
                  showListIcon === "heart_icon" ? "box-icon active" : "box-icon"
                }
                onClick={() => setShowListIcon("heart_icon")}
              >
                <span className="icon">❤️</span>
                <span className="number">
                  {quantityOneIcon(props.value.drop_icon, "heart_icon")}
                </span>
              </div>
            )}
            {props.incluleIcon(props.value.drop_icon, "smile_icon") && (
              <div
                className={
                  showListIcon === "smile_icon" ? "box-icon active" : "box-icon"
                }
                onClick={() => setShowListIcon("smile_icon")}
              >
                <span className="icon">😄</span>
                <span>
                  {quantityOneIcon(props.value.drop_icon, "smile_icon")}
                </span>
              </div>
            )}
            {props.incluleIcon(props.value.drop_icon, "surprise_icon") && (
              <div
                className={
                  showListIcon === "surprise_icon"
                    ? "box-icon active"
                    : "box-icon"
                }
                onClick={() => setShowListIcon("surprise_icon")}
              >
                <span className="icon">😱</span>
                <span className="number">
                  {quantityOneIcon(props.value.drop_icon, "surprise_icon")}
                </span>
              </div>
            )}
            {props.incluleIcon(props.value.drop_icon, "cry_icon") && (
              <div
                className={
                  showListIcon === "cry_icon" ? "box-icon active" : "box-icon"
                }
                onClick={() => setShowListIcon("cry_icon")}
              >
                <span className="icon">😭</span>
                <span className="number">
                  {quantityOneIcon(props.value.drop_icon, "cry_icon")}
                </span>
              </div>
            )}
            {props.incluleIcon(props.value.drop_icon, "angry_icon") && (
              <div
                className={
                  showListIcon === "angry_icon" ? "box-icon active" : "box-icon"
                }
                onClick={() => setShowListIcon("angry_icon")}
              >
                <span className="icon">😡</span>
                <span className="number">
                  {quantityOneIcon(props.value.drop_icon, "angry_icon")}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="wrapper-member-drop">
          {props.value.drop_icon &&
            props.value.drop_icon.map((value) => {
              return (
                <div className="box-member-drop">
                  <div className="member-drop">
                    <div className="member">
                      <div className="image">
                        <img src={value.avatar} alt="not load"></img>
                      </div>
                      <div className="name">{value.name}</div>
                    </div>
                    <div className="icon-drop">
                      {value.like_icon && showIcon("like_icon") && (
                        <div className="icon">
                          <span>👍</span>
                        </div>
                      )}
                      {value.heart_icon && showIcon("heart_icon") && (
                        <div className="icon">
                          <span>❤️</span>
                        </div>
                      )}
                      {value.smile_icon && showIcon("smile_icon") && (
                        <div className="icon">
                          <span>😄</span>
                        </div>
                      )}
                      {value.surprise_icon && showIcon("surprise_icon") && (
                        <div className="icon">
                          <span>😱</span>
                        </div>
                      )}
                      {value.cry_icon && showIcon("cry_icon") && (
                        <div className="icon">
                          <span>😭</span>
                        </div>
                      )}
                      {value.angry_icon && showIcon("angry_icon") && (
                        <div className="icon">
                          <span>😡</span>
                        </div>
                      )}
                      <div className="number">
                        {showListIcon === "all" && (
                          <span>{quantityIconOnePerson(value)}</span>
                        )}
                        {showListIcon === "like_icon" && (
                          <span>{value.like_icon}</span>
                        )}
                        {showListIcon === "heart_icon" && (
                          <span>{value.heart_icon}</span>
                        )}
                        {showListIcon === "smile_icon" && (
                          <span>{value.smile_icon}</span>
                        )}
                        {showListIcon === "surprise_icon" && (
                          <span>{value.surprise_icon}</span>
                        )}
                        {showListIcon === "cry_icon" && (
                          <span>{value.cry_icon}</span>
                        )}

                        {showListIcon === "angry_icon" && (
                          <span>{value.angry_icon}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>
    </>
  );
};
export default ModalDropIcon;
