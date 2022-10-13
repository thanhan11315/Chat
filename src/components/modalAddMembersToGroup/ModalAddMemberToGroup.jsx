import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import { Button, Row } from "antd";
import "./ModalAddMembersToGroup.scss";
import { CloseCircleOutlined } from "@ant-design/icons";

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

  return (
    <>
      <Modal
        open={props.modalAddMembersToGroup}
        title="Thêm thành viên"
        onCancel={unCheckCancel}
        footer={[
          <Button onClick={unCheckCancel}>Hủy</Button>,
          <button
            onClick={handleClickAddMembersToGroupButton}
            className={`buton-confirm ${
              checkedValues.length < 1 && "unconditional"
            }`}
          >
            Xác nhận
          </button>,
        ]}
      >
        <div className="wrapper-modal-add-members-to-group">
          <InPutSearch />
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
