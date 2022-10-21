import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import { Button, Row } from "antd";
import "./ModalShare.scss";
import ShareInput from "../shareInput/ShareInput";
import { CloseCircleOutlined } from "@ant-design/icons";
import ImageGroup from "../imageGroup/ImageGroup";

function ModalShare(props) {
  const [checkedValues, setCheckedValues] = useState([]);
  const handleClickCheckBox = () => {
    const inputElements = document.querySelectorAll(
      ".input-checkbox-share:checked"
    );
    setCheckedValues(
      [...inputElements].map((inputElement) => {
        return props.dataUserFriends.find(
          (object) => object.id_user === inputElement.value
        );
      })
    );
  };

  const unCheckCancel = () => {
    props.handleCancelModalShare();
    const inputElements = document.querySelectorAll(
      ".input-checkbox-share:checked"
    );
    inputElements.forEach((inputElement) => {
      inputElement.checked = false;
    });
    setCheckedValues([]);
  };

  const unCheckShare = (value) => {
    document.getElementById(`${value.id_user + 1}`).checked = false;
    handleClickCheckBox();
  };

  const createDateBoxChat = (oldValueChat) => {
    if (oldValueChat) {
      const valueTimeLast = oldValueChat.find(
        (oldValueChat) => oldValueChat.create_date === true
      );
      if (valueTimeLast) {
        return (
          props.date.year - valueTimeLast?.year >= 1 ||
          props.date.month - valueTimeLast?.month >= 1 ||
          props.date.date - valueTimeLast?.date >= 1 ||
          props.date.hours - valueTimeLast?.hours >= 2
        );
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  const sentValueChatsShare = () => {
    checkedValues.forEach((checkedValue) => {
      let oldValueChat = JSON.parse(
        localStorage.getItem(`${checkedValue.id_user}`)
      );
      if (oldValueChat) {
        let newValueChats = [
          {
            ...props.valueRightClickMessage,
            ...props.date,
            ...props.dataUserMe,
            create_date: createDateBoxChat(oldValueChat),
            id: props.id + checkedValue.id_user,
          },
          ...oldValueChat,
        ];
        localStorage.setItem(
          `${checkedValue.id_user}`,
          JSON.stringify(newValueChats)
        );
      } else {
        let newValueChats = [
          {
            ...props.valueRightClickMessage,
            ...props.date,
            ...props.dataUserMe,
            create_date: createDateBoxChat(oldValueChat),
            id: props.id + checkedValue.id_user,
          },
        ];
        localStorage.setItem(
          `${checkedValue.id_user}`,
          JSON.stringify(newValueChats)
        );
      }
      if (checkedValue.id_user === props.dataUserFriend?.id_user) {
        props.setValueChats([
          {
            ...props.valueRightClickMessage,
            ...props.date,
            ...props.dataUserMe,
            create_date: createDateBoxChat(oldValueChat),
            id: props.id + checkedValue.id_user,
          },
          ...oldValueChat,
        ]);
      }
    });
  };

  const handleClickShareButton = () => {
    if (checkedValues.length > 0) {
      unCheckCancel();
      props.handleCancelModalShare();
      console.log(checkedValues);
      console.log(props.valueRightClickMessage);
      sentValueChatsShare();
      let newdataUserFriendsChange = [];
      checkedValues.forEach((checkedValue) => {
        const IndexChangeDataUserFriend = props.dataUserFriends.findIndex(
          (dataUserFriend) => checkedValue.id_user === dataUserFriend.id_user
        );
        newdataUserFriendsChange = [
          ...newdataUserFriendsChange,
          {
            ...props.dataUserFriends[IndexChangeDataUserFriend],
            last_value_chat: {
              ...props.valueRightClickMessage,
              ...props.date,
              id: props.id,
            },
          },
        ];
      });
      let oldDataUserFriends = props.dataUserFriends;
      checkedValues.forEach((checkedValue) => {
        const IndexChangeDataUserFriend = oldDataUserFriends.findIndex(
          (dataUserFriend) => checkedValue.id_user === dataUserFriend.id_user
        );
        oldDataUserFriends.splice(IndexChangeDataUserFriend, 1);
      });
      console.log(oldDataUserFriends);
      const NewdataUserFriends = [
        ...newdataUserFriendsChange,
        ...oldDataUserFriends,
      ];
      console.log(NewdataUserFriends);
      props.setDataUserFriends(NewdataUserFriends);
      localStorage.setItem(
        "dataUserFriends",
        JSON.stringify(NewdataUserFriends)
      );
    }
  };

  return (
    <>
      <Modal
        open={props.modalShare}
        title="Chia sẻ"
        onCancel={unCheckCancel}
        footer={[
          <Button onClick={unCheckCancel}>Hủy</Button>,
          <button
            onClick={handleClickShareButton}
            className={`buton-confirm ${
              checkedValues.length < 1 && "unconditional"
            }`}
          >
            Chia sẻ
          </button>,
        ]}
      >
        <div className="wrapper-modal-Share">
          <InPutSearch />
          <Row className="box-choose-share">
            <div className="box-list-choose-share">
              <div className="title-choose-share">Trò chuyện gần đây</div>
              <div className="list-choose-share">
                <form>
                  {props.dataUserFriends &&
                    props.dataUserFriends.map((value) => {
                      return (
                        <>
                          {!value.notification_system && (
                            <label
                              htmlFor={value.id_user + 1}
                              key={value.id_user + 1}
                            >
                              <div className="choose-share">
                                <div className="box-input">
                                  <input
                                    className="input-checkbox-share"
                                    onChange={handleClickCheckBox}
                                    type="checkbox"
                                    name={value.id_user}
                                    value={value.id_user}
                                    id={value.id_user + 1}
                                  />
                                </div>
                                {value.avatar && !value.group && (
                                  <div className="image">
                                    <img
                                      src={value.avatar}
                                      alt="img not load"
                                    />
                                  </div>
                                )}
                                {value.group && (
                                  <ImageGroup dataUserFriend={value} />
                                )}
                                <div className="name">{value.name}</div>
                              </div>
                            </label>
                          )}
                        </>
                      );
                    })}
                </form>
              </div>
            </div>
          </Row>
          <div className="history-choose-share">
            {checkedValues &&
              checkedValues.map((value) => {
                return (
                  <div className="image" key={value.id_user + 1}>
                    {value.avatar && !value.group && (
                      <div className="image">
                        <img src={value.avatar} alt="img not load" />
                      </div>
                    )}
                    {value.group && <ImageGroup dataUserFriend={value} />}
                    <div className="delete" onClick={() => unCheckShare(value)}>
                      <CloseCircleOutlined />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="box-content">
            <div className="title-content">Nội dung chia sẻ</div>
            <div className="content">
              <ShareInput
                shareInputValue={props.valueRightClickMessage}
                renderImageFile={props.renderImageFile}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalShare;
