import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";
import InPutSearch from "../inPutSearch/InPutSearch";
import { Button, Row } from "antd";
import "./modalSentOrdercode.scss";

function ModalSentOrderCode(props) {
  const orderInfoCode = ["BDHS555534LM.449570805", "SGNS555534NT.599381235"];
  const [checkedValues, setCheckedValues] = useState([]);
  const handleClickCheckBox = () => {
    const inputElements = document.querySelectorAll(
      ".input-checkbox-sent-order-code:checked"
    );
    setCheckedValues(
      [...inputElements].map((inputElement) => {
        return orderInfoCode.find((string) => string === inputElement.value);
      })
    );
  };

  const unCheckCancel = () => {
    props.handleCancelModalSentOrderCode();
    const inputElements = document.querySelectorAll(
      ".input-checkbox-sent-order-code:checked"
    );
    inputElements.forEach((inputElement) => {
      inputElement.checked = false;
    });
    setCheckedValues([]);
  };

  const inputSearch = document.querySelector(
    ".search-sent-order-code .ant-input"
  );

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
    boxElement = document.querySelector(".list-choose-sent-order-code");
    elements = boxElement.querySelectorAll(".choose-sent-order-code");
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

  const handleClickSentOrderCode = () => {
    if (checkedValues.length > 0) {
      const newValueChat = checkedValues.map((value) => {
        return {
          ...props.dataUserMe,
          recipients: {
            ...props.dataUserFriend,
            recipients: "",
            last_value_chat: "",
          },
          other_people: false,
          see_more_order_code: false,
          ghim: false,
          // is_includes_order_info: isIncludesOrderInfo(valueChatReplace),
          is_orders_info: props.isOrderInfo(value),
          is_only_one_order_info: props.isOnlyOneOrderInfo(value),
          order_code: props.getOrderCode(value),
          // order_code_message: orderCodeify(valueChatReplace),
          id: props.id,
          text_message: props.linkPhoneOrdercodeify(value),
          ...props.date,
          create_date: props.createDateBoxChat(),
        };
      });
      console.log(newValueChat);
      props.setValueChatsOderinfo(newValueChat);
      unCheckCancel();
    }
  };

  return (
    <>
      <Modal
        open={props.modalSentOrderCode}
        title="Gửi đơn hàng"
        onCancel={unCheckCancel}
        footer={[
          <Button onClick={unCheckCancel}>Hủy</Button>,
          <button
            onClick={handleClickSentOrderCode}
            className={`button-confirm ${
              checkedValues.length < 1 && "unconditional"
            }`}
          >
            Gửi
          </button>,
        ]}
      >
        <div className="wrapper-modal-sent-order-code">
          {/* <div className="box-input-sent-order-code">
            <Input
              placeholder="Nhập tên nhóm"
              value={nameGroup}
              onChange={(e) => setNameGroup(e.target.value)}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              maxLength={30}
            />
          </div> */}
          <div className="search-sent-order-code">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <Row className="box-choose-sent-order-code">
            <div className="box-list-choose-sent-order-code">
              <div className="title-choose-sent-order-code">
                Mã đơn hàng gần đây
              </div>
              <div className="list-choose-sent-order-code">
                <form>
                  {orderInfoCode &&
                    orderInfoCode.map((value) => {
                      return (
                        <>
                          {!value.notification_system && (
                            <label htmlFor={value} key={value}>
                              <div className="choose-sent-order-code">
                                <div className="box-input">
                                  <input
                                    className="input-checkbox-sent-order-code"
                                    onChange={handleClickCheckBox}
                                    type="checkbox"
                                    name={value}
                                    value={value}
                                    id={value}
                                  />
                                </div>
                                {/* <div className="image">
                                  <img src={value.avatar} alt="img not load" />
                                </div> */}
                                <div className="name">{value}</div>
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
          {/* <div className="history-choose-sent-order-code">
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
          </div> */}
        </div>
      </Modal>
    </>
  );
}

export default ModalSentOrderCode;
