import React, { useState, useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import { Button, Input, Radio } from "antd";
import "./ModalUpdateInformation.scss";
function ModalUpdateInformation(props) {
  const cancelBox = () => {
    props.setModalUpdateInformation(false);
  };
  const [valueName, setValueName] = useState(props.dataUserMe.name);
  const [valueGender, setValueGender] = useState(props.dataUserMe.gender);
  const [valueBirthday, setValueBirthday] = useState(props.dataUserMe.birthday);
  const [valueAvatar, setValueAvatar] = useState(props.dataUserMe.avatar);
  useEffect(() => {
    setValueName(props.dataUserMe.name);
    setValueGender(props.dataUserMe.gender);
    setValueBirthday(props.dataUserMe.birthday);
    setValueAvatar(props.dataUserMe.avatar);
  }, [props.modalUpdateInformation]); // eslint-disable-line react-hooks/exhaustive-deps

  const onChangeGender = (e) => {
    setValueGender(e.target.value);
  };
  const onChangeBirthday = (e) => {
    setValueBirthday(e.target.value);
  };
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };

  const onChangeImageAvartar = (e) => {
    setValueAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const ifUpdate = () => {
    return (
      valueName !== props.dataUserMe.name ||
      valueGender !== props.dataUserMe.gender ||
      valueBirthday !== props.dataUserMe.birthday ||
      valueAvatar !== props.dataUserMe.avatar
    );
  };

  const newDataUserMe = {
    ...props.dataUserMe,
    avatar: valueAvatar,
    name: valueName,
    gender: valueGender,
    birthday: valueBirthday,
  };

  const changeDataUserMe = () => {
    props.setDataUserMe(newDataUserMe);
    localStorage.setItem("dataUserMe", JSON.stringify(newDataUserMe));
  };

  const changeValueChatsCurrentBoxChat = (
    dataUserFriend,
    dataUserFriendCurrent,
    newValueChats
  ) => {
    if (dataUserFriend.id_user === dataUserFriendCurrent.id_user) {
      props.setValueChats(newValueChats);
    }
  };

  const makeNewValueChats = (oldValueChats, newDataUserMe) => {
    if (oldValueChats) {
      const newValueChats = oldValueChats.map((oldValueChat) => {
        if (oldValueChat.id_user === newDataUserMe.id_user) {
          const newValueChat = {
            ...oldValueChat,
            ...newDataUserMe,
          };
          return newValueChat;
        } else {
          return oldValueChat;
        }
      });
      return newValueChats;
    }
  };

  const changeDataUserFriend = (dataUserFriend, newDataUserMe) => {
    if (dataUserFriend.group === true) {
      const newMember = dataUserFriend.members.map((member) => {
        if (member.id_user === newDataUserMe.id_user) {
          return { ...member, ...newDataUserMe };
        } else {
          return member;
        }
      });
      return { ...dataUserFriend, members: newMember };
    } else {
      return dataUserFriend;
    }
  };

  const changeAllValueChatsUpdateInformation = () => {
    props.dataUserFriends.forEach((dataUserFriend) => {
      const oldValueChats = JSON.parse(
        localStorage.getItem(dataUserFriend.id_user)
      );
      const newValueChats = makeNewValueChats(oldValueChats, newDataUserMe);
      newValueChats &&
        localStorage.setItem(
          dataUserFriend.id_user,
          JSON.stringify(newValueChats)
        );
      changeValueChatsCurrentBoxChat(
        dataUserFriend,
        props.dataUserFriend,
        newValueChats
      );
    });
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      return changeDataUserFriend(dataUserFriend, newDataUserMe);
    });
    const newDataUserFriend = newDataUserFriends.find(
      (newDataUserFriend) =>
        newDataUserFriend.id_user === props.dataUserFriend.id_user
    );

    props.setDataUserFriend(newDataUserFriend);

    props.setDataUserFriendsAll(newDataUserFriends);
  };

  const handleClickUpdate = () => {
    if (ifUpdate()) {
      changeDataUserMe();
      changeAllValueChatsUpdateInformation();
      cancelBox();
    }
  };
  return (
    <>
      <Modal
        open={props.modalUpdateInformation}
        title="Thông tin tài khoản"
        onCancel={cancelBox}
        footer={[
          <Button onClick={cancelBox}>Hủy</Button>,
          <button
            onClick={handleClickUpdate}
            className={`buton-confirm  ${!ifUpdate() && "unconditional"}`}
          >
            Cập nhập
          </button>,
        ]}
      >
        <div className="wrapper-modal-update-information">
          <div className="profilePhoto">
            <div className="avatar-profile">
              <img
                className="img-profile"
                alt=""
                src={props.dataUserMe?.cover_photo}
              />
            </div>
            <div className="user-profile-preview">
              <div
                className="box-img-avatar"
                onClick={() => {
                  const uploadImageAvatar = document.querySelector(
                    ".uploadImageAvartar"
                  );
                  uploadImageAvatar.click();
                }}
              >
                <img className="img-avatar" alt="" src={valueAvatar} />
              </div>
              <input
                className="uploadImageAvartar"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  onChangeImageAvartar(e);
                }}
                style={{
                  display: "none",
                }}
              />
              <div className="preview-content">
                <div className="name-content">{props.dataUserMe?.name}</div>
              </div>
            </div>
          </div>
          <div className="change-name">
            <div className="title">Tên hiển thị</div>
            <div className="input InPutSearch">
              <Input
                placeholder="Nhập Tên"
                onChange={(e) => onChangeName(e)}
                value={valueName}
              />
            </div>
          </div>
          <div className="box-update-profile">
            <div className="title">Thông tin cá nhân</div>
            <div className="title-1">Giới tính</div>
            <div className="gender">
              <Radio.Group
                onChange={(e) => onChangeGender(e)}
                value={valueGender}
              >
                <Radio value="Nam">Nam</Radio>
                <Radio value="Nữ">Nữ</Radio>
              </Radio.Group>
            </div>
            <div className="title-1">Ngày sinh</div>
            <div className="input InPutSearch">
              <Input
                placeholder="dd/mm/yyyy"
                onChange={(e) => onChangeBirthday(e)}
                value={valueBirthday}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalUpdateInformation;
