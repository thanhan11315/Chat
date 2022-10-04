import React from "react";
import "./RightmouseChooseBoxChat.scss";

function RightmouseChooseBoxChat(props) {
  console.log(props.dataUserFriends);
  console.log(props.valueRightClickChooseBoxChat);
  const UnpinConversation = () => {
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        delete dataUserFriend["style_order"];
        return { ...dataUserFriend, pin_conversation: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const Pinconversation = () => {
    const date = new Date();
    const styleOrder = -Number(
      `${date.getYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}}`
    );
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return {
          ...dataUserFriend,
          pin_conversation: true,
          style_order: styleOrder,
        };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const markAsUnread = () => {
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, not_read: true };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const markAsRead = () => {
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, not_read: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const turnOffNotification = () => {
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, notification: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const turnOnNotification = () => {
    const newdataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (
        props.valueRightClickChooseBoxChat.id_user === dataUserFriend.id_user
      ) {
        return { ...dataUserFriend, notification: true };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriends(newdataUserFriends);
    props.setDataUserFriendsRender(newdataUserFriends);
  };
  const deleteConversation = () => {};
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
