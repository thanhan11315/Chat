import React from "react";
import "./dropIcon.scss";
import { LikeOutlined } from "@ant-design/icons";
import ModalDropIcon from "../modalDropicon/modalDropicon";
import { useState } from "react";

function DropIcon(props) {
  // const value = {
  //   drop_icon: [
  //     {
  //       ...props.dataUserMe,
  //       like_icon: 1,
  //       heart_icon: 1,
  //       smile_icon: 1,
  //       icon_new: 1,
  //     },
  //   ],
  // };
  const newValueChat = (icon) => {
    const newDropIcon = () => {
      // like icon
      if (!props.value?.drop_icon && icon === "👍") {
        const newDropIcon = [
          { ...props.dataUserMe, like_icon: 1, icon_new: "👍" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "👍") {
            const newDropIcon = [
              { ...props.dataUserMe, like_icon: 1, icon_new: "👍" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "👍") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.like_icon) {
                  return {
                    ...value,
                    like_icon: value.like_icon + 1,
                    icon_new: "👍",
                  };
                } else {
                  return { ...value, like_icon: 1, icon_new: "👍" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }

      // heart icon

      if (!props.value?.drop_icon && icon === "❤️") {
        const newDropIcon = [
          { ...props.dataUserMe, heart_icon: 1, icon_new: "❤️" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "❤️") {
            const newDropIcon = [
              { ...props.dataUserMe, heart_icon: 1, icon_new: "❤️" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "❤️") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.heart_icon) {
                  return {
                    ...value,
                    heart_icon: value.heart_icon + 1,
                    icon_new: "❤️",
                  };
                } else {
                  return { ...value, heart_icon: 1, icon_new: "❤️" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }

      // smile_icon

      if (!props.value?.drop_icon && icon === "😄") {
        const newDropIcon = [
          { ...props.dataUserMe, smile_icon: 1, icon_new: "😄" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "😄") {
            const newDropIcon = [
              { ...props.dataUserMe, smile_icon: 1, icon_new: "😄" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "😄") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.smile_icon) {
                  return {
                    ...value,
                    smile_icon: value.smile_icon + 1,
                    icon_new: "😄",
                  };
                } else {
                  return { ...value, smile_icon: 1, icon_new: "😄" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }

      // surprise_icon 😱

      if (!props.value?.drop_icon && icon === "😱") {
        const newDropIcon = [
          { ...props.dataUserMe, surprise_icon: 1, icon_new: "😱" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "😱") {
            const newDropIcon = [
              { ...props.dataUserMe, surprise_icon: 1, icon_new: "😱" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "😱") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.surprise_icon) {
                  return {
                    ...value,
                    surprise_icon: value.surprise_icon + 1,
                    icon_new: "😱",
                  };
                } else {
                  return { ...value, surprise_icon: 1, icon_new: "😱" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }

      // cry_icon 😭
      if (!props.value?.drop_icon && icon === "😭") {
        const newDropIcon = [
          { ...props.dataUserMe, cry_icon: 1, icon_new: "😭" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "😭") {
            const newDropIcon = [
              { ...props.dataUserMe, cry_icon: 1, icon_new: "😭" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "😭") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.cry_icon) {
                  return {
                    ...value,
                    cry_icon: value.cry_icon + 1,
                    icon_new: "😭",
                  };
                } else {
                  return { ...value, cry_icon: 1, icon_new: "😭" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }

      // angry_icon 😡
      if (!props.value?.drop_icon && icon === "😡") {
        const newDropIcon = [
          { ...props.dataUserMe, angry_icon: 1, icon_new: "😡" },
        ];
        return newDropIcon;
      }
      if (props.value?.drop_icon) {
        const isIncludeMeDropIcon = props.value?.drop_icon.some(
          (value) => value.id === props.dataUserMe.id
        );
        if (!isIncludeMeDropIcon) {
          if (icon === "😡") {
            const newDropIcon = [
              { ...props.dataUserMe, angry_icon: 1, icon_new: "😡" },
              ...props.value.drop_icon,
            ];
            return newDropIcon;
          }
        }
        if (isIncludeMeDropIcon) {
          if (icon === "😡") {
            const newDropIcon = props.value?.drop_icon.map((value) => {
              if (value.id === props.dataUserMe.id) {
                if (value.angry_icon) {
                  return {
                    ...value,
                    angry_icon: value.angry_icon + 1,
                    icon_new: "😡",
                  };
                } else {
                  return { ...value, angry_icon: 1, icon_new: "😡" };
                }
              } else {
                return value;
              }
            });
            return newDropIcon;
          }
        }
      }
    };
    const newValue = {
      ...props.value,
      drop_icon: newDropIcon(),
    };
    console.log(newValue);
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

  const quantityIcon = (values) => {
    let total = 0;
    if (values) {
      values.forEach((value) => {
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
      });
      return total;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    console.log(1);
    setIsModalOpen(true);
  };
  const incluleIcon = (values, name) => {
    let icon = false;
    if (values) {
      if (name === "like_icon") {
        values.forEach((value) => {
          if (value.like_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
      if (name === "heart_icon") {
        values.forEach((value) => {
          if (value.heart_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
      if (name === "smile_icon") {
        values.forEach((value) => {
          if (value.smile_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
      if (name === "surprise_icon") {
        values.forEach((value) => {
          if (value.surprise_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
      if (name === "cry_icon") {
        values.forEach((value) => {
          if (value.cry_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
      if (name === "angry_icon") {
        values.forEach((value) => {
          if (value.angry_icon > 0) {
            icon = true;
          }
        });
        return icon;
      }
    }
  };

  return (
    <>
      <ModalDropIcon
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        quantityIcon={quantityIcon(props.value.drop_icon)}
        value={props.value}
        incluleIcon={incluleIcon}
      />
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
            <div className="icon-new">
              {" "}
              {props.value?.drop_icon[0]?.icon_new}
            </div>
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
          <div className="list-icon-show" onClick={showModal}>
            <div className="quantity">
              {quantityIcon(props.value.drop_icon)}
            </div>
            {incluleIcon(props.value.drop_icon, "like_icon") && (
              <div className="icon">👍</div>
            )}
            {incluleIcon(props.value.drop_icon, "heart_icon") && (
              <div className="icon">❤️</div>
            )}
            {incluleIcon(props.value.drop_icon, "smile_icon") && (
              <div className="icon">😄</div>
            )}
            {incluleIcon(props.value.drop_icon, "surprise_icon") && (
              <div className="icon">😱</div>
            )}
            {incluleIcon(props.value.drop_icon, "cry_icon") && (
              <div className="icon">😭</div>
            )}
            {incluleIcon(props.value.drop_icon, "angry_icon") && (
              <div className="icon">😡</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DropIcon;
