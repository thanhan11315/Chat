import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import { Col } from "antd";
import "./SeeAllNavRightMember.scss";
import InPutSearch from "../inPutSearch/InPutSearch";
function SeeAllNavRightMembers(props) {
  const orderMember = (leader, deputy) => {
    if (leader) {
      return -2;
    } else if (deputy) {
      return -1;
    }
  };
  return (
    <Col className={`see-all-right ${true && "hiddenRightNav"}`}>
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
        <div className="title-nav">Thành Viên</div>
      </div>
      <div className="box-title-choose">
        <div className="title">
          Danh sách thành viên ({props.dataUserFriend?.members?.length})
        </div>
      </div>
      <div className="box-input-search">
        <InPutSearch />
      </div>
      <div className="box-wrapper">
        <div className="box-element">
          <div className="content-member">
            {props.dataUserFriend?.members &&
              props.dataUserFriend?.members.map((member) => {
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
  );
}

export default SeeAllNavRightMembers;
