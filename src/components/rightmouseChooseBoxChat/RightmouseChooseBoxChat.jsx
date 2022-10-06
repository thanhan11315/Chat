import React from "react";
import "./RightmouseChooseBoxChat.scss";

function RightmouseChooseBoxChat(props) {
  const UnpinConversation = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        delete dataUserFriend["style_order"];
        return { ...dataUserFriend, pin_conversation: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            delete dataUserFriendRender["style_order"];
            return {
              ...dataUserFriendRender,
              pin_conversation: false,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  const Pinconversation = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return {
          ...dataUserFriend,
          pin_conversation: true,
          style_order: 1,
        };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            return {
              ...dataUserFriendRender,
              pin_conversation: true,
              style_order: 1,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  const markAsUnread = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, not_read: true };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            return {
              ...dataUserFriendRender,
              not_read: true,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  const markAsRead = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, not_read: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            return {
              ...dataUserFriendRender,
              not_read: false,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  const turnOffNotification = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, notification: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            return {
              ...dataUserFriendRender,
              notification: false,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  const turnOnNotification = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, notification: true };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendNotRead = props.dataUserFriendsRender.map(
        (dataUserFriendRender) => {
          if (
            dataUserFriendRender.id_user ===
            props.valueRightClickChooseBoxChat.id_user
          ) {
            return {
              ...dataUserFriendRender,
              notification: true,
            };
          } else {
            return dataUserFriendRender;
          }
        }
      );
      props.setDataUserFriendsRender(newDataUserFriendNotRead);
    } else {
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };

  const deleteConversation = () => {
    const newDataUserFriends = props.dataUserFriends.filter(
      (dataUserFriend) =>
        dataUserFriend.id_user !== props.valueRightClickChooseBoxChat.id_user
    );
    props.setDataUserFriends(newDataUserFriends);
    if (document.querySelector(".not-read.selected")) {
      const newDataUserFriendsNotRead = props.dataUserFriendsRender.filter(
        (dataUserFriendRender) =>
          dataUserFriendRender.id_user !==
          props.valueRightClickChooseBoxChat.id_user
      );
      if (
        props.dataUserFriend.id_user ===
        props.valueRightClickChooseBoxChat.id_user
      ) {
        const elementBoxChat0 = document.querySelector(
          `.box-choose-chatbox-${newDataUserFriendsNotRead[0].id_user}`
        );
        elementBoxChat0.click();
      }
      props.setDataUserFriendsRender(newDataUserFriendsNotRead);
    } else {
      if (
        props.dataUserFriend.id_user ===
        props.valueRightClickChooseBoxChat.id_user
      ) {
        const elementBoxChat0 = document.querySelector(
          `.box-choose-chatbox-${newDataUserFriends[0].id_user}`
        );
        elementBoxChat0.click();
        console.log(1);
      }
      props.setDataUserFriendsRender(newDataUserFriends);
    }
  };
  return (
    <>
      <div className="rightmouse-choose-box-chat">
        {props.valueRightClickChooseBoxChat.pin_conversation ? (
          <div className="select-element" onClick={UnpinConversation}>
            Bỏ Ghim hội thoại
          </div>
        ) : (
          <div className="select-element" onClick={Pinconversation}>
            Ghim hội thoại
          </div>
        )}
        {props.valueRightClickChooseBoxChat.not_read ? (
          <div className="select-element" onClick={markAsRead}>
            Đánh dấu đã đọc
          </div>
        ) : (
          <div className="select-element" onClick={markAsUnread}>
            Đánh dấu chưa đọc
          </div>
        )}
        {props.valueRightClickChooseBoxChat.notification ? (
          <div className="select-element" onClick={turnOffNotification}>
            Tắt thông báo
          </div>
        ) : (
          <div className="select-element" onClick={turnOnNotification}>
            Bật thông báo
          </div>
        )}
        <div className="line" />
        <div
          className="select-element"
          style={{ color: "#730e0e" }}
          onClick={deleteConversation}
        >
          Xóa Hội thoại
        </div>
      </div>
    </>
  );
}

export default RightmouseChooseBoxChat;
