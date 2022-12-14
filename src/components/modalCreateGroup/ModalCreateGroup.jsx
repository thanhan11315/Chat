import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import SuperShipLogo from "../../assets/images/SuperShipLogo.png";
import { Button, Row, Input } from "antd";
import "./ModalCreateGroup.scss";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

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
    setNameGroup("");
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
      const ListMembers = [
        { ...props.dataUserMe, leader: true },
        ...checkedValues,
      ];
      const nameMembers = ListMembers.map((listMember) => {
        return listMember.name;
      });
      const DataUserFriend = {
        avatar: SuperShipLogo,
        id_user: props.id,
        name: nameGroup.trim() ? nameGroup : nameMembers.join(", "),
        group: true,
        status: `${checkedValues.length + 1} th??nh vi??n`,
        members: ListMembers,
      };
      const valueChatsAddMembersToGroup = {
        recipients: DataUserFriend,
        create_date: true,
        ...props.date,
        id: props.id,
        add_members_to_group: true,
        members_add: props.dataUserMe,
        members_added: checkedValues,
      };
      const newDataUserFriend = {
        ...DataUserFriend,
        last_value_chat: valueChatsAddMembersToGroup,
      };
      const newDataUserFriends = [newDataUserFriend, ...props.dataUserFriends];
      const newDataUserFriendsStorage = [
        newDataUserFriend,
        ...props.dataUserFriendsStorage,
      ];
      props.setDataUserFriendsStorageAll(newDataUserFriendsStorage);
      console.log(valueChatsAddMembersToGroup);
      setValueChatsAddMembersAllMessage(valueChatsAddMembersToGroup);
      props.setDataUserFriendsAll(newDataUserFriends);
      unCheckCancel();
      props.handleCancelModalCreateGroup();
      setNameGroup("");
    }
  };

  const inputSearch = document.querySelector(".search-create-group .ant-input");

  const VIETNAMESE_A = "??????????????????????????????????????????????";
  const ARRVIETNAMESE_A = VIETNAMESE_A.split("");
  const VIETNAMESE_E = "??????????????????????????????";
  const ARRVIETNAMESE_E = VIETNAMESE_E.split("");
  const VIETNAMESE_I = "????????????";
  const ARRVIETNAMESE_I = VIETNAMESE_I.split("");
  const VIETNAMESE_O = "??????????????????????????????????????????????";
  const ARRVIETNAMESE_O = VIETNAMESE_O.split("");
  const VIETNAMESE_U = "?????????????????????????????";
  const ARRVIETNAMESE_U = VIETNAMESE_U.split("");
  const VIETNAMESE_Y = "??????????????";
  const ARRVIETNAMESE_Y = VIETNAMESE_Y.split("");

  const vietNameseOmitMark = (string) => {
    let newString = string;
    ARRVIETNAMESE_A.forEach((character) => {
      newString = newString.replaceAll(character, "A");
    });
    newString = newString.replaceAll("??", "D");
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
        title="T???o Nh??m"
        onCancel={unCheckCancel}
        footer={[
          <Button onClick={unCheckCancel}>H???y</Button>,
          <button
            onClick={handleClickCreateGroupButton}
            className={`button-confirm ${
              checkedValues.length < 2 && "unconditional"
            }`}
          >
            T???o Nh??m
          </button>,
        ]}
      >
        <div className="wrapper-modal-create-group">
          <div className="box-input-create-group">
            <Input
              placeholder="Nh???p t??n nh??m"
              value={nameGroup}
              onChange={(e) => setNameGroup(e.target.value)}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              maxLength={30}
            />
          </div>
          <div className="content">Th??m b???n b?? v??o nh??m</div>
          <div className="search-create-group">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <Row className="box-choose-create-group">
            <div className="box-list-choose-create-group">
              <div className="title-choose-create-group">
                Tr?? chuy???n g???n ????y
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
                                  style={{ display: "none" }}
                                />
                                <div>
                                  <div>
                                    <CheckOutlined />
                                  </div>
                                </div>
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
