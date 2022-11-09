import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Col } from "antd";
import "./SeeAllNavRightMember.scss";
import InPutSearch from "../inPutSearch/InPutSearch";
import ImageGroup from "../imageGroup/ImageGroup";
function SeeAllNavRightMembers(props) {
  const orderMember = (leader, deputy) => {
    if (leader) {
      return -2;
    } else if (deputy) {
      return -1;
    }
  };
  const inputSearch = document.querySelector(
    ".see-all-right-member .InPutSearch .ant-input"
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
    boxElement = document.querySelector(
      ".see-all-right-member .content-member"
    );
    elements = boxElement.querySelectorAll(".box-member");
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
      {props.dataUserFriend?.members && (
        <Col
          className={`see-all-right-member ${
            props.hiddenSeeAllMembersNavRight && "hiddenRightNav"
          }`}
        >
          <div className="box-title">
            <div
              className="icon"
              onClick={() => {
                props.setHiddenSeeAllMembersNavRight(true);
                console.log(props.hiddenSeeAllMembersNavRight);
                props.setHiddenRightNav(false);
              }}
            >
              <LeftOutlined />
            </div>
            <div className="title-nav">Thành Viên</div>
          </div>
          <div className="box-title-choose">
            <div className="title">
              Danh sách thành viên ({props.dataUserFriend?.members?.length})
            </div>
          </div>
          <div className="box-input-search">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <div className="box-wrapper">
            <div className="box-element">
              <div className="content-member">
                {props.dataUserFriend?.members.map((member) => {
                  return (
                    <div
                      className="box-member"
                      onClick={() => {
                        props.handleClickImgChat(member);
                      }}
                      onContextMenu={(e) => {
                        props.onContextMenuMember(e, member);
                      }}
                      style={{
                        order: orderMember(member.leader, member.deputy),
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="image-member">
                          <img src={member.avatar} alt="img not load" />
                        </div>
                        <div className="box-information">
                          <div className="name">{member.name}</div>
                          {member.leader && (
                            <div className="position">Trưởng nhóm</div>
                          )}
                          {member.deputy && (
                            <div className="position">Phó nhóm</div>
                          )}
                        </div>
                      </div>
                      {member.id_user !== props.dataUserMe?.id_user && (
                        <div className="add-friend">
                          <span>Kết bạn</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      )}
      {props.generalGroup(props.dataUserFriends, props.dataUserFriend).length >
        0 && (
        <Col
          className={`see-all-right-member ${
            props.hiddenSeeAllMembersNavRight && "hiddenRightNav"
          }`}
        >
          <div className="box-title">
            <div
              className="icon"
              onClick={() => {
                props.setHiddenSeeAllMembersNavRight(true);
                props.setHiddenRightNav(false);
              }}
            >
              <LeftOutlined />
            </div>
            <div className="title-nav">Nhóm chung</div>
          </div>
          <div className="box-title-choose">
            <div className="title">
              Danh sách nhóm (
              {
                props.generalGroup(props.dataUserFriends, props.dataUserFriend)
                  .length
              }
              )
            </div>
          </div>
          <div className="box-input-search">
            <InPutSearch searchFriend={searchFriend} />
          </div>
          <div className="box-wrapper">
            <div className="box-element">
              <div className="content-member">
                {props
                  .generalGroup(props.dataUserFriends, props.dataUserFriend)
                  .map((member) => {
                    return (
                      <div
                        className="box-member"
                        onClick={() => {
                          props.handleClickImgChat(member);
                        }}
                        style={{
                          order: orderMember(member.leader, member.deputy),
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="image-member">
                            <ImageGroup dataUserFriend={member} />
                          </div>
                          <div className="box-information">
                            <div className="name">{member.name}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Col>
      )}
    </>
  );
}

export default SeeAllNavRightMembers;
