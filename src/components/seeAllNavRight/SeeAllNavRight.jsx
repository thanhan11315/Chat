import React, { useState } from "react";
import {
  CheckOutlined,
  CloseOutlined,
  DownOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Col, Image } from "antd";
import "./SeeAllNavRight.scss";
import RenderFile from "../../components/file/RenderFile";
import LinkPreview from "../../components/linkPreview/LinkPreview";
import OrderInfo from "../ordersInfo/OrdersInfo";
import InPutSearch from "../../components/inPutSearch/InPutSearch";
import { useEffect } from "react";
import CalendarFilter from "./Calendar";
function SeeAllNavRight(props) {
  const [showListMember, setShowListMember] = useState(false);
  const [selectedMember, setSelectedMember] = useState("");
  const [showFilterDate, setShowFilterDate] = useState(false);
  document &&
    document.addEventListener("click", () => {
      setShowListMember(false);
    });
  const handleClickTitleOdersInfo = () => {
    props.setChooseSeeAllNavRight("ordersInfo");
  };
  const handleClickTitleImages = () => {
    props.setChooseSeeAllNavRight("images");
  };
  const handleClickTitleFiles = () => {
    props.setChooseSeeAllNavRight("files");
  };
  const handleClickTitleLinks = () => {
    props.setChooseSeeAllNavRight("links");
  };
  const listMemberSent = () => {
    if (props.dataUserFriend?.group) {
      return props.dataUserFriend.members;
    } else {
      return [props.dataUserFriend, props.dataUserMe];
    }
  };
  const handleClickMemberSent = (e) => {
    e.stopPropagation();
    setShowFilterDate(false);
    setShowListMember(!showListMember);
  };
  const handleClickMemberFilter = (member) => {
    setShowListMember(!showListMember);
    setSelectedMember(member);
  };

  const handleClickDateFilter = () => {
    setShowListMember(false);
    setShowFilterDate(!showFilterDate);
  };
  // const handleClickDateconfirm = (e) => {
  //   e.stopPropagation();
  // };
  const inputSearch = document.querySelector(
    ".box-filter .InPutSearch .inputSearch .ant-input"
  );

  const inputSearchOdersInfo = document.querySelector(
    ".content-order-info .InPutSearch .inputSearch .ant-input"
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
    boxElement = document.querySelector(".box-filter .box-list-member");
    console.log(boxElement);
    elements = boxElement.querySelectorAll(".box-member");
    console.log(elements);
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

  const [valueChatsImage, setValueChatsImage] = useState("");
  const [valueChatsOrderInfo, setValueChatsOrderInfo] = useState("");
  const [valueChatsFile, setValueChatsFile] = useState("");
  const [valueChatsLink, setValueChatsLink] = useState("");
  useEffect(() => {
    if (props.valueChats) {
      const valueChatsImage = props.valueChats.filter(
        (valueChat) => valueChat.url
      );
      let valueOlDate = "";
      const newValueChatsImage = valueChatsImage.map((valueChatImage) => {
        if (
          valueChatImage.date - valueOlDate.date > 0 ||
          valueChatImage.month - valueOlDate.month > 0 ||
          valueChatImage.year - valueOlDate.year > 0 ||
          !valueOlDate
        ) {
          valueOlDate = valueChatImage;
          return { ...valueChatImage, create_box_date_show_all: true };
        } else {
          return valueChatImage;
        }
      });
      setValueChatsImage(newValueChatsImage);

      const valueChatsOrderInfo = props.valueChats.filter(
        (valueChat) => valueChat.is_orders_info
      );
      valueOlDate = "";
      const newValueChatsOderInfo = valueChatsOrderInfo.map(
        (valueChatOderInfo) => {
          if (
            valueChatOderInfo.date - valueOlDate.date > 0 ||
            valueChatOderInfo.month - valueOlDate.month > 0 ||
            valueChatOderInfo.year - valueOlDate.year > 0 ||
            !valueOlDate
          ) {
            valueOlDate = valueChatOderInfo;
            return { ...valueChatOderInfo, create_box_date_show_all: true };
          } else {
            return valueChatOderInfo;
          }
        }
      );
      setValueChatsOrderInfo(newValueChatsOderInfo);

      const valueChatsFile = props.valueChats.filter(
        (valueChat) => valueChat.file
      );

      valueOlDate = "";

      const newValueChatsFile = valueChatsFile.map((valueChatFile) => {
        if (
          valueChatFile.date - valueOlDate.date > 0 ||
          valueChatFile.month - valueOlDate.month > 0 ||
          valueChatFile.year - valueOlDate.year > 0 ||
          !valueOlDate
        ) {
          valueOlDate = valueChatFile;
          return { ...valueChatFile, create_box_date_show_all: true };
        } else {
          return valueChatFile;
        }
      });
      setValueChatsFile(newValueChatsFile);

      const valueChatsLink = props.valueChats.filter(
        (valueChat) => valueChat.is_message_url
      );

      valueOlDate = "";

      const newValueChatsLink = valueChatsLink.map((valueChatLink) => {
        if (
          valueChatLink.date - valueOlDate.date > 0 ||
          valueChatLink.month - valueOlDate.month > 0 ||
          valueChatLink.year - valueOlDate.year > 0 ||
          !valueOlDate
        ) {
          valueOlDate = valueChatLink;
          return { ...valueChatLink, create_box_date_show_all: true };
        } else {
          return valueChatLink;
        }
      });
      setValueChatsLink(newValueChatsLink);
    }
  }, [props.valueChats]); // eslint-disable-line react-hooks/exhaustive-deps

  const searchFriendOrderInfo = () => {
    let filter, boxElement, elements, elementTitle, i, txtValue, lengthElements;
    filter = vietNameseOmitMark(inputSearchOdersInfo?.value?.toUpperCase());
    console.log(inputSearchOdersInfo?.value);
    boxElement = document.querySelector(".see-all-right .content-order-info");
    console.log(boxElement);
    elements = boxElement.querySelectorAll(".wraper-oders-info-two");
    console.log(elements);
    lengthElements = elements.length;
    for (i = 0; i < lengthElements; i++) {
      elementTitle = elements[i].querySelector(".title");
      txtValue =
        vietNameseOmitMark(elementTitle.textContent.toUpperCase()) ||
        vietNameseOmitMark(elementTitle.innerHTML.toUpperCase());
      if (txtValue.indexOf(filter.trim()) > -1) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  };
  const conditionFillterMember = (valueChat) => {
    if (selectedMember) {
      if (selectedMember.id_user === valueChat.id_user) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
  return (
    <Col
      className={`see-all-right ${
        props.hiddenSeeAllNavRight && "hiddenRightNav"
      }`}
    >
      <div className="box-title">
        <div
          className="icon"
          onClick={() => {
            props.setHiddenSeeAllNavRight(true);
            props.setHiddenRightNav(false);
          }}
        >
          <LeftOutlined />
        </div>
        <div className="title-nav">Kho lưu trữ</div>
      </div>
      <div className="box-title-choose">
        <div
          className={`title ${
            props.chooseSeeAllNavRight === "ordersInfo" && "choose"
          }`}
          onClick={handleClickTitleOdersInfo}
        >
          Đơn hàng
        </div>
        <div
          className={`title ${
            props.chooseSeeAllNavRight === "images" && "choose"
          }`}
          onClick={handleClickTitleImages}
        >
          Ảnh
        </div>
        <div
          className={`title ${
            props.chooseSeeAllNavRight === "files" && "choose"
          }`}
          onClick={handleClickTitleFiles}
        >
          Files
        </div>
        <div
          className={`title ${
            props.chooseSeeAllNavRight === "links" && "choose"
          }`}
          onClick={handleClickTitleLinks}
        >
          Links
        </div>
      </div>
      <div className="box-filter">
        {!selectedMember && (
          <div
            className="box-choose-member-sent"
            onClick={(e) => handleClickMemberSent(e)}
          >
            <>
              <span>Người gửi</span>
              <span>
                <DownOutlined />
              </span>
            </>
          </div>
        )}
        {selectedMember && (
          <div
            className="box-choosed-member-sent"
            onClick={(e) => handleClickMemberSent(e)}
          >
            <>
              <span className="name">{selectedMember.name}</span>
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedMember("");
                }}
              >
                <div className="close">
                  <CloseOutlined />
                </div>
              </span>
            </>
          </div>
        )}
        <div
          className="box-choose-member-sent"
          onClick={(e) => handleClickDateFilter(e)}
        >
          <>
            <span>Ngày gửi</span>
            <span>
              <DownOutlined />
            </span>
          </>
        </div>
        {showListMember && (
          <div className="box-list-search" onClick={(e) => e.stopPropagation()}>
            <div className="box-search">
              <InPutSearch searchFriend={searchFriend} />
            </div>
            <div className="box-list-member">
              {listMemberSent() &&
                listMemberSent().map((member) => {
                  if (selectedMember.id_user !== member.id_user) {
                    return (
                      <div
                        className="box-member"
                        onClick={() => handleClickMemberFilter(member)}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="image-member">
                            <img src={member.avatar} alt="img not load" />
                          </div>
                          <div className="box-information">
                            <div className="name">{member.name}</div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="box-member choose"
                        onClick={() => handleClickMemberFilter(member)}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="image-member">
                            <img src={member.avatar} alt="img not load" />
                          </div>
                          <div className="box-information">
                            <div className="name">{member.name}</div>
                            <div className="icon">
                              <CheckOutlined />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        )}
        {showFilterDate && (
          <div className="box-filter-date" onClick={(e) => e.stopPropagation()}>
            <div className="box-list-choose-date">
              <div className="time-hint">
                <span>Gợi Ý thời gian</span>
                <span>></span>
              </div>
              <div className="line"></div>
              <div className="title-calendar">Chọn khoảng thời gian</div>
              <div className="calendar">
                <CalendarFilter />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="box-wrapper">
        <div className="box-element">
          {props.chooseSeeAllNavRight === "ordersInfo" && (
            <div className="content-order-info">
              <div className="box-search">
                <InPutSearch searchFriend={searchFriendOrderInfo} />
              </div>
              {valueChatsOrderInfo &&
                valueChatsOrderInfo.map((valueChat, key) => {
                  return (
                    <>
                      {valueChat.is_orders_info &&
                        !valueChat.delete &&
                        conditionFillterMember(valueChat) && (
                          <>
                            {valueChat.create_box_date_show_all && (
                              <div className="box-date-show-all">
                                <div className="date">
                                  Ngày {valueChat.date} Tháng {valueChat.month}{" "}
                                  Năm {valueChat.year}
                                </div>
                              </div>
                            )}
                            <OrderInfo key={key} size="two" value={valueChat} />
                          </>
                        )}
                    </>
                  );
                })}
            </div>
          )}
          {props.chooseSeeAllNavRight === "images" && (
            <Image.PreviewGroup>
              <div className="content-image-video">
                {valueChatsImage &&
                  valueChatsImage.map((valueChat, key) => {
                    return (
                      <>
                        {valueChat.url &&
                          !valueChat.delete &&
                          conditionFillterMember(valueChat) && (
                            <>
                              {valueChat.create_box_date_show_all && (
                                <div className="box-date-show-all">
                                  <div className="date">
                                    Ngày {valueChat.date} Tháng{" "}
                                    {valueChat.month} Năm {valueChat.year}
                                  </div>
                                </div>
                              )}
                              <div className="box-image-video" key={key}>
                                {valueChat.type === "video" ? (
                                  <video src={valueChat.url} alt="not load" />
                                ) : (
                                  <>
                                    <Image
                                      src={valueChat.url}
                                      alt="img not load"
                                      className="image"
                                    />
                                  </>
                                )}
                              </div>
                            </>
                          )}
                      </>
                    );
                  })}
              </div>
            </Image.PreviewGroup>
          )}
          {props.chooseSeeAllNavRight === "files" && (
            <div className="content-file">
              {valueChatsFile &&
                valueChatsFile.map((valueChat, key) => {
                  return (
                    <>
                      {valueChat.file &&
                        !valueChat.delete &&
                        conditionFillterMember(valueChat) && (
                          <>
                            {valueChat.create_box_date_show_all && (
                              <div className="box-date-show-all">
                                <div className="date">
                                  Ngày {valueChat.date} Tháng {valueChat.month}{" "}
                                  Năm {valueChat.year}
                                </div>
                              </div>
                            )}
                            <RenderFile
                              navRight={true}
                              key={key}
                              renderImageFile={props.renderImageFile}
                              value={valueChat}
                              bytesToSize={props.bytesToSize}
                              setUrlFile={props.setUrlFile}
                              urlFile={props.urlFile}
                              setValueFile={props.setValueFile}
                            />
                          </>
                        )}
                    </>
                  );
                })}
            </div>
          )}
          {props.chooseSeeAllNavRight === "links" && (
            <div className="content-link">
              {valueChatsLink &&
                valueChatsLink.map((valueChat, key) => {
                  return (
                    <>
                      {valueChat.is_message_url &&
                        !valueChat.delete &&
                        conditionFillterMember(valueChat) && (
                          <>
                            {valueChat.create_box_date_show_all && (
                              <div className="box-date-show-all">
                                <div className="date">
                                  Ngày {valueChat.date} Tháng {valueChat.month}{" "}
                                  Năm {valueChat.year}
                                </div>
                              </div>
                            )}
                            <LinkPreview
                              url={valueChat.message_url}
                              size="three"
                              key={key}
                              date={valueChat.date}
                              month={valueChat.month}
                              year={valueChat.year}
                              hours={valueChat.hours}
                              minutes={valueChat.minutes}
                            />
                          </>
                        )}
                    </>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}
export default SeeAllNavRight;
