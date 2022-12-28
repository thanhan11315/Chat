import React from "react";
import "./dropIcon.scss";
import { LikeOutlined } from "@ant-design/icons";

function DropIcon(props) {
  const newValueChat = (icon) => {
    const newDropIcon = () => {
      // 👍
      console.log(props.value.drop_icon?.like_icon);
      if (
        props.value?.drop_icon &&
        props.value.drop_icon?.like_icon &&
        icon === "👍"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            like_icon: [...props.value.drop_icon?.like_icon, props.dataUserMe],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.like_icon &&
        icon === "👍"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            like_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "👍") {
        return {
          drop_icon: {
            like_icon: [props.dataUserMe],
          },
        };
      }

      // ❤️

      if (
        props.value?.drop_icon &&
        props.value.drop_icon?.heart_icon &&
        icon === "❤️"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            heart_icon: [
              ...props.value.drop_icon?.heart_icon,
              props.dataUserMe,
            ],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.heart_icon &&
        icon === "❤️"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            heart_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "❤️") {
        return {
          drop_icon: {
            heart_icon: [props.dataUserMe],
          },
        };
      }

      // 😄

      if (
        props.value?.drop_icon &&
        props.value.drop_icon?.smile_icon &&
        icon === "😄"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            smile_icon: [
              ...props.value.drop_icon?.smile_icon,
              props.dataUserMe,
            ],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.smile_icon &&
        icon === "😄"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            smile_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "😄") {
        return {
          drop_icon: {
            smile_icon: [props.dataUserMe],
          },
        };
      }

      // 😱
      if (
        props.value?.drop_icon &&
        props.value?.drop_icon?.surprise_icon &&
        icon === "😱"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            surprise_icon: [
              ...props.value.drop_icon?.surprise_icon,
              props.dataUserMe,
            ],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.cry_icon &&
        icon === "😱"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            surprise_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "😱") {
        return {
          drop_icon: {
            surprise_icon: [props.dataUserMe],
          },
        };
      }

      // 😭

      if (
        props.value?.drop_icon &&
        props.value.drop_icon?.cry_icon &&
        icon === "😭"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            cry_icon: [...props.value.drop_icon?.cry_icon, props.dataUserMe],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.cry_icon &&
        icon === "😭"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            cry_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "😭") {
        return {
          drop_icon: {
            cry_icon: [props.dataUserMe],
          },
        };
      }

      // 😡

      if (
        props.value?.drop_icon &&
        props.value.drop_icon?.angry_icon &&
        icon === "😡"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            angry_icon: [
              ...props.value.drop_icon?.angry_icon,
              props.dataUserMe,
            ],
          },
        };
      }
      if (
        props.value?.drop_icon &&
        !props.value.drop_icon?.angry_icon &&
        icon === "😡"
      ) {
        return {
          drop_icon: {
            ...props.value.drop_icon,
            angry_icon: [props.dataUserMe],
          },
        };
      }
      if (!props.value?.drop_icon && icon === "😡") {
        return {
          drop_icon: {
            angry_icon: [props.dataUserMe],
          },
        };
      }
    };
    const newValue = {
      ...props.value,
      ...newDropIcon(),
    };
    return newValue;
  };

  const changeValueChats = (icon) => {
    const newValueChatt = newValueChat(icon);
    const newValueChats = props.valueChats.map((value) => {
      if (value.id === newValueChatt.id) {
        return newValueChatt;
      } else {
        return value;
      }
    });
    props.setValueChats(newValueChats);
    localStorage.setItem(
      props.dataUserFriend.id_user,
      JSON.stringify(newValueChats)
    );
    console.log(newValueChats);
  };

  const quantityIcon = (like, heart, smile, surprise, cry, angry) => {
    let total = 0;
    if (like > 0) {
      total += like;
    }
    if (heart > 0) {
      total += heart;
    }
    if (smile > 0) {
      total += smile;
    }
    if (surprise > 0) {
      total += surprise;
    }
    if (cry > 0) {
      total += cry;
    }
    if (angry > 0) {
      total += angry;
    }
    return total;
  };

  return (
    <>
      {!props.value.drop_icon && (
        <div className="box-drop-icon">
          <div className="box-list-icon">
            <div className="list-icon">
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("👍");
                }}
              >
                <span>👍</span>
              </div>
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("❤️");
                }}
              >
                <span>❤️</span>
              </div>
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("😄");
                }}
              >
                <span>😄</span>
              </div>
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("😱");
                }}
              >
                <span>😱</span>
              </div>
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("😭");
                }}
              >
                <span>😭</span>
              </div>
              <div
                className="icon"
                onClick={() => {
                  changeValueChats("😡");
                }}
              >
                <span>😡</span>
              </div>
            </div>
          </div>
          <div className="drop-icon">
            <div
              className="icon"
              onClick={() => {
                changeValueChats("👍");
              }}
            >
              <LikeOutlined />
            </div>
          </div>
        </div>
      )}
      {props.value.drop_icon && (
        <div className="box-dropped-icon">
          <div className="box-choose-icon-new">
            <div className="icon-new">👍</div>
            <div className="box-list-icon">
              <div className="list-icon">
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("👍");
                  }}
                >
                  <span>👍</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("❤️");
                  }}
                >
                  <span>❤️</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("😄");
                  }}
                >
                  <span>😄</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("😱");
                  }}
                >
                  <span>😱</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("😭");
                  }}
                >
                  <span>😭</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    changeValueChats("😡");
                  }}
                >
                  <span>😡</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-icon-show">
            <div className="quantity">
              {quantityIcon(
                props.value.drop_icon?.like_icon?.length,
                props.value.drop_icon?.heart_icon?.length,
                props.value.drop_icon?.smile_icon?.length,
                props.value.drop_icon?.surprise_icon?.length,
                props.value.drop_icon?.cry_icon?.length,
                props.value.drop_icon?.angry_icon?.length
              )}
            </div>
            {props.value.drop_icon.like_icon && <div className="icon">👍</div>}
            {props.value.drop_icon.heart_icon && <div className="icon">❤️</div>}
            {props.value.drop_icon.smile_icon && <div className="icon">😄</div>}
            {props.value.drop_icon.surprise_icon && (
              <div className="icon">😱</div>
            )}
            {props.value.drop_icon.cry_icon && <div className="icon">😭</div>}
            {props.value.drop_icon.angry_icon && <div className="icon">😡</div>}
          </div>
        </div>
      )}
    </>
  );
}

export default DropIcon;
