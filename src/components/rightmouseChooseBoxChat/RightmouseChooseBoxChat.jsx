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
    if (
      props.dataUserFriend.id_user ===
      props.valueRightClickChooseBoxChat.id_user
    ) {
      props.setDataUserFriend({
        ...props.dataUserFriend,
        pin_conversation: false,
      });
    }
    props.setDataUserFriendsAll(newDataUserFriends);
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
    if (
      props.dataUserFriend.id_user ===
      props.valueRightClickChooseBoxChat.id_user
    ) {
      props.setDataUserFriend({
        ...props.dataUserFriend,
        pin_conversation: true,
      });
    }
    props.setDataUserFriendsAll(newDataUserFriends);
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
    props.setDataUserFriendsAll(newDataUserFriends);
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
    props.setDataUserFriendsAll(newDataUserFriends);
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
    props.setDataUserFriendsAll(newDataUserFriends);
    if (
      props.dataUserFriend.id_user ===
      props.valueRightClickChooseBoxChat.id_user
    ) {
      props.setDataUserFriend({ ...props.dataUserFriend, notification: false });
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
    props.setDataUserFriendsAll(newDataUserFriends);
    if (
      props.dataUserFriend.id_user ===
      props.valueRightClickChooseBoxChat.id_user
    ) {
      props.setDataUserFriend({ ...props.dataUserFriend, notification: true });
    }
  };

  const deleteConversation = () => {
    const newDataUserFriends = props.dataUserFriends?.filter(
      (dataUserFriend) =>
        dataUserFriend?.id_user !== props.valueRightClickChooseBoxChat?.id_user
    );
    if (
      props.dataUserFriend.id_user ===
      props.valueRightClickChooseBoxChat.id_user
    ) {
      const elementBoxChat0 = document.querySelector(
        `.box-choose-chatbox-${newDataUserFriends[0]?.id_user}`
      );
      if (elementBoxChat0) {
        elementBoxChat0.click();
      }
    }
    if (newDataUserFriends.length < 1) {
      props.setDataUserFriend("");
    }
    props.setDataUserFriendsAll(newDataUserFriends);
    console.log(newDataUserFriends);
    localStorage.setItem(
      props.valueRightClickChooseBoxChat.id_user,
      JSON.stringify("")
    );
  };
  return (
    <>
      <div className="rightmouse-choose-box-chat">
        {props.valueRightClickChooseBoxChat.pin_conversation ? (
          <div className="select-element" onClick={UnpinConversation}>
            B??? Ghim h???i tho???i
          </div>
        ) : (
          <div className="select-element" onClick={Pinconversation}>
            Ghim h???i tho???i
          </div>
        )}
        {props.valueRightClickChooseBoxChat.not_read ? (
          <div className="select-element" onClick={markAsRead}>
            ????nh d???u ???? ?????c
          </div>
        ) : (
          <div className="select-element" onClick={markAsUnread}>
            ????nh d???u ch??a ?????c
          </div>
        )}
        {props.valueRightClickChooseBoxChat.notification ? (
          <div className="select-element" onClick={turnOffNotification}>
            T???t th??ng b??o
          </div>
        ) : (
          <div className="select-element" onClick={turnOnNotification}>
            B???t th??ng b??o
          </div>
        )}
        <div className="line" />
        <div
          className="select-element"
          style={{ color: "#730e0e" }}
          onClick={deleteConversation}
        >
          X??a H???i tho???i
        </div>
      </div>
    </>
  );
}

export default RightmouseChooseBoxChat;
