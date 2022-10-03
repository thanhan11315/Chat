import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import { Button, Row } from "antd";
import "./ModalShare.scss";
import ShareInput from "../shareInput/ShareInput";
import { CloseCircleOutlined } from "@ant-design/icons";

function ModalShare(props) {
  const [checkedValues, setCheckedValues] = useState([]);
  const handleClickCheckBox = () => {
    const inputElements = document.querySelectorAll(
      ".input-checkbox-share:checked"
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
    document.getElementById(`${value.id_user}`).checked = false;
    handleClickCheckBox();
  };

  const handleClickShareButton = () => {
    console.log(checkedValues);
    console.log(props.valueRightClickMessage);
    props.handleCancelModalShare();
    unCheckCancel();
  };

  return (
    <>
      <Modal
        open={props.modalShare}
        title="Chia sẻ"
        s
        onCancel={props.handleCancelModalShare}
        footer={[
          <Button
            onClick={() => {
              unCheckCancel();
            }}
          >
            Hủy
          </Button>,
          <Button onClick={handleClickShareButton}>Chia sẻ</Button>,
        ]}
      >
        <div className="wrapper-modal-Share">
          <InPutSearch />
          <Row className="box-choose-share">
            <div className="box-list-choose-share">
              <div className="title-choose-share">Trò chuyện gần đây</div>
              <div className="list-choose-share">
                <form>
                  {props.dataUserFriendsApi.map((value) => {
                    return (
                      <>
                        <label htmlFor={value.id_user} key={value.id_user}>
                          <div className="choose-share">
                            <input
                              className="input-checkbox-share"
                              onChange={handleClickCheckBox}
                              type="checkbox"
                              name={value.id_user}
                              value={value.id_user}
                              id={value.id_user}
                            />
                            <div className="image">
                              <img src={value.avatar} alt="img not load" />
                            </div>
                            <div className="name">{value.name}</div>
                          </div>
                        </label>
                      </>
                    );
                  })}
                </form>
              </div>
            </div>
          </Row>
          <div className="history-choose-share">
            {checkedValues.map((value) => {
              return (
                <div className="image">
                  <img src={value.avatar} alt="img not load" />
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
