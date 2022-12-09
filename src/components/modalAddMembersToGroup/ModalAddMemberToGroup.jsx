import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import { Button, Row } from "antd";
import "./ModalAddMembersToGroup.scss";
import { CheckOutlined, CloseCircleOutlined } from "@ant-design/icons";

function ModalAddMembersToGroup(props) {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleClickCheckBox = () => {
    const inputElements = document.querySelectorAll(
      ".input-checkbox-add-members-to-group:checked"
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
    props.handleCancelModalAddMembersToGroup();
    const inputElements = document.querySelectorAll(
      ".input-checkbox-add-members-to-group:checked"
    );
    inputElements.forEach((inputElement) => {
      inputElement.checked = false;
    });
    setCheckedValues([]);
  };

  const unCheckAddMembersToGroup = (value) => {
    document.getElementById(`${value.id_user + 2}`).checked = false;
    handleClickCheckBox();
  };

  const handleClickAddMembersToGroupButton = () => {
    if (checkedValues.length > 0) {
      const newDataUserFriends = props.dataUserFriends.map((value) => {
        if (value.id_user === props.dataUserFriend.id_user) {
          return {
            ...value,
            status: `${[...value.members, ...checkedValues].length} thành viên`,
            members: [...value.members, ...checkedValues],
          };
        } else {
          return value;
        }
      });
      const valueChatsAddMembersToGroup = {
        recipients: props.dataUserFriend,
        create_date: props.createDateBoxChat(),
        ...props.date,
        id: props.id,
        add_members_to_group: true,
        members_add: props.dataUserMe,
        members_added: checkedValues,
      };
      props.setValueChatsInRenderAllMessage(valueChatsAddMembersToGroup);
      props.setDataUserFriendsAll(newDataUserFriends);
      props.setDataUserFriend(
        newDataUserFriends.find(
          (value) => value.id_user === props.dataUserFriend.id_user
        )
      );
      unCheckCancel();
      props.handleCancelModalAddMembersToGroup();
    }
  };

  const inputSearch = document.querySelector(".search-add-friend .ant-input");

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
    boxElement = document.querySelector(".list-choose-add-members-to-group");
    elements = boxElement.querySelectorAll(".choose-add-members-to-group");
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
        open={props.modalAddMembersToGroup}
        title="Thêm thành viên"
        onCancel={unCheckCancel}
        footer={[
          <Button className="button-cancel" onClick={unCheckCancel}>
            Hủy
          </Button>,
          <button
            onClick={handleClickAddMembersToGroupButton}
            className={`button-confirm ${
              checkedValues.length < 1 && "unconditional"
            }`}
          >
            Xác nhận
          </button>,
        ]}
      >
        <div className="wrapper-modal-add-members-to-group">
          <div className="search-add-friend">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <Row className="box-choose-add-members-to-group">
            <div className="box-list-choose-add-members-to-group">
              <div className="title-choose-add-members-to-group">
                Trò chuyện gần đây
              </div>
              <div className="list-choose-add-members-to-group">
                <form>
                  {props.dataUserFriendsApiAddMembersToGroup.map((value) => {
                    return (
                      <>
                        {!value.notification_system && (
                          <label
                            htmlFor={value.id_user + 2}
                            key={value.id_user + 2}
                          >
                            <div className="choose-add-members-to-group">
                              <div className="box-input">
                                <input
                                  className="input-checkbox-add-members-to-group"
                                  onChange={handleClickCheckBox}
                                  type="checkbox"
                                  name={value.id_user}
                                  value={value.id_user}
                                  id={value.id_user + 2}
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
          <div className="history-choose-add-members-to-group">
            {checkedValues.map((value) => {
              return (
                <div className="image" key={value.id_user + 2}>
                  <img src={value.avatar} alt="img not load" />
                  <div
                    className="delete"
                    onClick={() => unCheckAddMembersToGroup(value)}
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

export default ModalAddMembersToGroup;
