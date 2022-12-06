import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import { Button, Input } from "antd";
import "./ModalChangeName.scss";
import { useEffect } from "react";
function ModalChangeName(props) {
  const [valueName, setValueName] = useState(props.dataUserFriend?.name);

  useEffect(() => {
    setValueName(props.dataUserFriend?.name);
  }, [props.modalChangeName]); // eslint-disable-line react-hooks/exhaustive-deps

  const cancelBox = () => {
    props.setModalChangeName(false);
  };

  const onChangeName = (e) => {
    setValueName(e.target.value);
  };

  const ifChange = () => {
    return valueName !== props.dataUserFriend?.name;
  };

  const newDataMembers = (dataUserFriend) => {
    const newDataMembers =
      dataUserFriend.members &&
      dataUserFriend.members.map((member) => {
        if (member.id_user === props.dataUserFriend.id_user) {
          return { ...member, name: valueName };
        } else {
          return member;
        }
      });
    console.log(newDataMembers);
    return newDataMembers;
  };

  const newDataUserFriends = () => {
    const newDataUserFriend =
      props.dataUserFriends &&
      props.dataUserFriends.map((dataUserFriend) => {
        if (dataUserFriend.id_user === props.dataUserFriend.id_user) {
          return { ...dataUserFriend, name: valueName };
        } else if (dataUserFriend.group) {
          return { ...dataUserFriend, members: newDataMembers(dataUserFriend) };
        } else {
          return dataUserFriend;
        }
      });
    return newDataUserFriend;
  };

  const newDataUserFriendsStoryage = () => {
    console.log(props.dataUserFriendsStorage);
    const newDataUserFriend =
      props.dataUserFriendsStorage &&
      props.dataUserFriendsStorage.map((dataUserFriend) => {
        if (dataUserFriend.id_user === props.dataUserFriend.id_user) {
          return { ...dataUserFriend, name: valueName };
        } else if (dataUserFriend.group) {
          return { ...dataUserFriend, members: newDataMembers(dataUserFriend) };
        } else {
          return dataUserFriend;
        }
      });
    console.log(newDataUserFriend);
    return newDataUserFriend;
  };

  const changeValueChats = () => {
    props.dataUserFriends.forEach((dataUserFriend) => {
      const oldValueChats = JSON.parse(
        localStorage.getItem(dataUserFriend.id_user)
      );
      const newValueChats =
        oldValueChats &&
        oldValueChats.map((oldValueChat) => {
          if (props.dataUserFriend.id_user === oldValueChat.id_user) {
            return { ...oldValueChat, name: valueName };
          } else {
            return oldValueChat;
          }
        });
      localStorage.setItem(
        dataUserFriend.id_user,
        JSON.stringify(newValueChats)
      );
      if (dataUserFriend.id_user === props.dataUserFriend) {
        props.setValueChats(newValueChats);
      }
    });
  };

  const handleClickUpdate = () => {
    if (ifChange()) {
      console.log(newDataUserFriends());
      console.log(newDataUserFriendsStoryage());
      props.setDataUserFriendsAll(newDataUserFriends());
      props.setDataUserFriendsStorageAll(newDataUserFriendsStoryage());
      props.setDataUserFriend({ ...props.dataUserFriend, name: valueName });
      changeValueChats();
      cancelBox();
    }
  };

  return (
    <>
      <Modal
        open={props.modalChangeName}
        title="Đặt tên gợi nhớ"
        onCancel={cancelBox}
        footer={[
          <Button onClick={cancelBox}>Hủy</Button>,
          <button
            onClick={handleClickUpdate}
            className={`button-confirm ${!ifChange() && "unconditional"}`}
          >
            Xác Nhận
          </button>,
        ]}
      >
        <div className="wrapper-modal-change-name">
          <div className="profilePhoto">
            <div className="user-profile-preview">
              <div className="box-img-avatar">
                <img
                  className="img-avatar"
                  alt=""
                  src={props.dataUserFriend?.avatar}
                />
              </div>
            </div>
            <div className="content">
              <div>
                Hãy đặt cho <span>{props.dataUserFriend?.name}</span> một cái
                tên dễ nhớ
              </div>
              <div>Lưu ý: Tên gợi nhớ sẽ chỉ hiển thị riêng với bạn</div>
            </div>
            <div className="change-name">
              <div className="input InPutSearch">
                <Input
                  placeholder="Nhập Tên"
                  onChange={(e) => onChangeName(e)}
                  value={valueName}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalChangeName;
