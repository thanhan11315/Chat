import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";
import { Button, Row, Input } from "antd";
import "./ModalCreateGroup.scss";
import { CloseCircleOutlined } from "@ant-design/icons";

function ModalCreateGroup(props) {
  const [checkedValues, setCheckedValues] = useState([]);
  const [nameGroup, setNameGroup] = useState("");
  const handleClickCheckBox = () => {
    const inputElements = document.querySelectorAll(
      ".input-checkbox-create-group:checked"
    );
    setCheckedValues(
      [...inputElements].map((inputElement) => {
        return props.dataUserFriendsApi.find(
          (object) => object.id_user === inputElement.value
        );
      })
    );
  };

  const unCheckCancel = () => {
    props.handleCancelModalCreateGroup();
    const inputElements = document.querySelectorAll(
      ".input-checkbox-create-group:checked"
    );
    inputElements.forEach((inputElement) => {
      inputElement.checked = false;
    });
    setCheckedValues([]);
  };

  const unCheckCreateGroup = (value) => {
    document.getElementById(`${value.id_user}`).checked = false;
    handleClickCheckBox();
  };

  const setValueChatsAddMembersAllMessage = (newValueChat) => {
    const newValueChats = [newValueChat];
    localStorage.setItem(
      newValueChat.recipients.id_user,
      JSON.stringify(newValueChats)
    );
  };

  const handleClickCreateGroupButton = () => {
    if (checkedValues.length >= 2) {
      const newDataUserFriends = [
        {
          avatar: SuperShipLogo,
          id_user: props.id,
          name: nameGroup,
          group: true,
          status: `${checkedValues.length + 1} thành viên`,
          members: [{ ...props.dataUserMe, leader: true }, ...checkedValues],
        },
        ...props.dataUserFriends,
      ];
      const valueChatsAddMembersToGroup = {
        recipients: newDataUserFriends[0],
        create_date: true,
        ...props.date,
        id: props.id,
        add_members_to_group: true,
        members_add: props.dataUserMe,
        members_added: checkedValues,
      };
      console.log(valueChatsAddMembersToGroup);
      setValueChatsAddMembersAllMessage(valueChatsAddMembersToGroup);
      props.setDataUserFriendsAll(newDataUserFriends);
      unCheckCancel();
      props.handleCancelModalCreateGroup();
    }
  };

  const inputSearch = document.querySelector(".search-create-group .ant-input");

  const VIETNAMESE_A = "ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠ";
  const ARRVIETNAMESE_A = VIETNAMESE_A.split("");
  const VIETNAMESE_E = "ẾỀỂỄỆÊÉÈẺẼẸ";
  const ARRVIETNAMESE_E = VIETNAMESE_E.split("");
  const VIETNAMESE_I = "ÍÌỈĨỊ";
  const ARRVIETNAMESE_I = VIETNAMESE_I.split("");
  const VIETNAMESE_O = "ỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌ";
  const ARRVIETNAMESE_O = VIETNAMESE_O.split("");
  const VIETNAMESE_U = "ỨỪỬỮỰƯÚÙỦŨỤ";
  const ARRVIETNAMESE_U = VIETNAMESE_U.split("");
  const VIETNAMESE_Y = "ÝỲỶỸỴ";
  const ARRVIETNAMESE_Y = VIETNAMESE_Y.split("");

  const vietNameseOmitMark = (string) => {
    let newString = string;
    ARRVIETNAMESE_A.forEach((character) => {
      newString = newString.replaceAll(character, "A");
    });
    newString = newString.replaceAll("Đ", "D");
    ARRVIETNAMESE_E.forEach((character) => {
      newString = newString.replaceAll(character, "E");
    });
    ARRVIETNAMESE_I.forEach((character) => {
      newString = newString.replaceAll(character, "I");
    });
    ARRVIETNAMESE_O.forEach((character) => {
      newString = newString.replaceAll(character, "O");
    });
    ARRVIETNAMESE_U.forEach((character) => {
      newString = newString.replaceAll(character, "U");
    });
    ARRVIETNAMESE_Y.forEach((character) => {
      newString = newString.replaceAll(character, "Y");
    });
    return newString;
  };
  const searchFriend = () => {
    let filter, boxElement, elements, elementTitle, i, txtValue, lengthElements;
    filter = vietNameseOmitMark(inputSearch?.value?.toUpperCase());
    boxElement = document.querySelector(".list-choose-create-group");
    elements = boxElement.querySelectorAll(".choose-create-group");
    lengthElements = elements.length;
    for (i = 0; i < lengthElements; i++) {
      elementTitle = elements[i].querySelector(".name");
      txtValue =
        vietNameseOmitMark(elementTitle.textContent.toUpperCase()) ||
        vietNameseOmitMark(elementTitle.innerHTML.toUpperCase());
      if (txtValue.indexOf(filter.trim()) > -1) {
        elements[i].style.display = "flex";
      } else {
        elements[i].style.display = "none";
      }
    }
  };

  return (
    <>
      <Modal
        open={props.modalCreateGroup}
        title="Tạo Nhóm"
        onCancel={unCheckCancel}
        footer={[
          <Button onClick={unCheckCancel}>Hủy</Button>,
          <button
            onClick={handleClickCreateGroupButton}
            className={`buton-confirm ${
              checkedValues.length < 2 && "unconditional"
            }`}
          >
            Tạo Nhóm
          </button>,
        ]}
      >
        <div className="wrapper-modal-create-group">
          <div className="box-input-create-group">
            <Input
              placeholder="Nhập tên nhóm"
              value={nameGroup}
              onChange={(e) => setNameGroup(e.target.value)}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              maxLength={30}
            />
          </div>
          <div className="content">Thêm bạn bè vào nhóm</div>
          <div className="search-create-group">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <Row className="box-choose-create-group">
            <div className="box-list-choose-create-group">
              <div className="title-choose-create-group">
                Trò chuyện gần đây
              </div>
              <div className="list-choose-create-group">
                <form>
                  {props.dataUserFriendsApi.map((value) => {
                    return (
                      <>
                        {!value.notification_system && (
                          <label htmlFor={value.id_user} key={value.id_user}>
                            <div className="choose-create-group">
                              <div className="box-input">
                                <input
                                  className="input-checkbox-create-group"
                                  onChange={handleClickCheckBox}
                                  type="checkbox"
                                  name={value.id_user}
                                  value={value.id_user}
                                  id={value.id_user}
                                />
                              </div>
                              <div className="image">
                                <img src={value.avatar} alt="img not load" />
                              </div>
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
          <div className="history-choose-create-group">
            {checkedValues.map((value) => {
              return (
                <div className="image" key={value.id_user}>
                  <img src={value.avatar} alt="img not load" />
                  <div
                    className="delete"
                    onClick={() => unCheckCreateGroup(value)}
                  >
                    <CloseCircleOutlined />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalCreateGroup;
