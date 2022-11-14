import React from "react";
import {
  BellOutlined,
  EditOutlined,
  ExportOutlined,
  PaperClipOutlined,
  SettingOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import "./Nav4.scss";
import RenderFile from "../../../components/file/RenderFile";
import ImageGroup from "../../../components/imageGroup/ImageGroup";
import LinkPreview from "../../../components/linkPreview/LinkPreview";
import OrderInfo from "../../../components/ordersInfo/OrdersInfo";
function Nav4(props) {
  const hanldeClickShowAllImage = () => {
    props.setHiddenSeeAllNavRight(false);
    props.setChooseSeeAllNavRight("images");
    props.setHiddenRightNav(true);
  };

  const hanldeClickShowAllFile = () => {
    props.setHiddenSeeAllNavRight(false);
    props.setChooseSeeAllNavRight("files");
    props.setHiddenRightNav(true);
  };

  const hanldeClickShowAllLink = () => {
    props.setHiddenSeeAllNavRight(false);
    props.setChooseSeeAllNavRight("links");
    props.setHiddenRightNav(true);
  };

  const hanldeClickShowAllOrdersInfo = () => {
    props.setHiddenSeeAllNavRight(false);
    props.setChooseSeeAllNavRight("ordersInfo");
    props.setHiddenRightNav(true);
  };

  const handleClickShowAllMember = () => {
    props.setHiddenSeeAllMembersNavRight(false);
    props.setHiddenRightNav(true);
  };

  const handleClickShowAllgeneralGroup = () => {
    props.setHiddenSeeAllMembersNavRight(false);
    props.setHiddenRightNav(true);
  };

  const turnOffNotification = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (props.dataUserFriend.id_user === dataUserFriend.id_user) {
        return { ...dataUserFriend, notification: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriendsAll(newDataUserFriends);
    props.setDataUserFriend({ ...props.dataUserFriend, notification: false });
  };
  const turnOnNotification = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (props.dataUserFriend.id_user === dataUserFriend.id_user) {
        return { ...dataUserFriend, notification: true };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriendsAll(newDataUserFriends);
    props.setDataUserFriend({ ...props.dataUserFriend, notification: true });
  };

  const UnpinConversation = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (props.dataUserFriend.id_user === dataUserFriend.id_user) {
        delete dataUserFriend["style_order"];
        return { ...dataUserFriend, pin_conversation: false };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriendsAll(newDataUserFriends);
    props.setDataUserFriend({
      ...props.dataUserFriend,
      pin_conversation: false,
    });
  };
  const Pinconversation = () => {
    const newDataUserFriends = props.dataUserFriends.map((dataUserFriend) => {
      if (props.dataUserFriend.id_user === dataUserFriend.id_user) {
        return {
          ...dataUserFriend,
          pin_conversation: true,
          style_order: 1,
        };
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriendsAll(newDataUserFriends);
    props.setDataUserFriend({
      ...props.dataUserFriend,
      pin_conversation: true,
    });
  };

  const handleClickOutGroup = (dataUserMe) => {
    const IndexUserMeInDataUserFriendMembers =
      props.dataUserFriend?.members?.findIndex(
        (member) => member.id_user === dataUserMe.id_user
      );
    const newDataUserFriend = props.dataUserFriend;
    if (IndexUserMeInDataUserFriendMembers !== -1) {
      newDataUserFriend.members.splice(IndexUserMeInDataUserFriendMembers, 1);
    }
    props.setDataUserFriend({
      ...newDataUserFriend,
      status: `${newDataUserFriend?.members.length} thành viên`,
    });
    const newDataUserFriends = props.dataUserFriends?.map((dataUserFriend) => {
      if (dataUserMe.id_user === dataUserFriend.id_user) {
        return newDataUserFriend;
      } else {
        return dataUserFriend;
      }
    });
    props.setDataUserFriendsAll(newDataUserFriends);
    const valueChatsRemoveMembersToGroup = {
      create_date: props.createDateBoxChat(),
      ...props.date,
      id: props.id,
      remove_members_to_group: true,
      recipients: props.dataUserFriend,
      members_removed: dataUserMe,
    };
    if (props.valueChats) {
      props.setValueChats([
        valueChatsRemoveMembersToGroup,
        ...props.valueChats,
      ]);
      localStorage.setItem(
        props.dataUserFriend.id_user,
        JSON.stringify([valueChatsRemoveMembersToGroup, ...props.valueChats])
      );
    } else {
      props.setValueChats([valueChatsRemoveMembersToGroup]);
      localStorage.setItem(
        props.dataUserFriend.id_user,
        JSON.stringify([valueChatsRemoveMembersToGroup])
      );
    }
  };

  const handleClickEditName = () => {
    props.setModalChangeName(true);
  };

  return (
    <Col className={`box-nav-4 ${props.hiddenRightNav && "hiddenRightNav"}`}>
      <div className="title-nav">Thông tin hội thoại</div>
      <div className="box-wrapper">
        <div className="box-information">
          <div className="image">
            {props.dataUserFriend?.group ? (
              <div
                onClick={() => props.handleClickImgChat(props.dataUserFriend)}
              >
                <ImageGroup dataUserFriend={props.dataUserFriend} />
              </div>
            ) : (
              <img
                src={props.dataUserFriend?.avatar}
                onClick={() => props.handleClickImgChat(props.dataUserFriend)}
                alt="img not load"
                style={{
                  border: "0.5px solid #fff",
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "56px",
                  height: "56px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div className="header-info-name">
            <div className="header">{props.dataUserFriend?.name}</div>
            <div className="icon" onClick={handleClickEditName}>
              <EditOutlined />
            </div>
          </div>
          <Row className="box-icon-content">
            {props.dataUserFriend?.notification ? (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={turnOffNotification}>
                    <BellOutlined />
                  </div>
                </div>
                <div className="content">Tắt thông báo</div>
              </div>
            ) : (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={turnOnNotification}>
                    <BellOutlined />
                  </div>
                </div>
                <div className="content">Bật thông báo</div>
              </div>
            )}
            {props.dataUserFriend?.pin_conversation ? (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={UnpinConversation}>
                    <PaperClipOutlined />
                  </div>
                </div>
                <div className="content">Bỏ Ghim hội thoại</div>
              </div>
            ) : (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={Pinconversation}>
                    <PaperClipOutlined />
                  </div>
                </div>
                <div className="content">Ghim hội thoại</div>
              </div>
            )}
            {props.dataUserFriend?.group ? (
              <>
                <div className="icon-content">
                  <div className="box-icon">
                    <div
                      className="icon"
                      onClick={props.handleClickAddMembersToGroup}
                    >
                      <UsergroupAddOutlined />
                    </div>
                  </div>
                  <div className="content">Thêm thành viên</div>
                </div>
                <div className="icon-content ">
                  <div className="box-icon ">
                    <div className="icon not-use">
                      <SettingOutlined />
                    </div>
                  </div>
                  <div className="content">Quản lí nhóm</div>
                </div>
              </>
            ) : (
              !props.dataUserFriend?.notification_system && (
                <div className="icon-content">
                  <div className="box-icon">
                    <div
                      className="icon"
                      onClick={props.handleClickCreateGroup}
                    >
                      <UsergroupAddOutlined />
                    </div>
                  </div>
                  <div className="content">Tạo nhóm trò chuyện</div>
                </div>
              )
            )}
          </Row>
        </div>
        {!props.dataUserFriend?.group && (
          <div className="box-element">
            <div className="content-member">
              <div className="box-member">
                <div className="icon" onClick={handleClickShowAllMember}>
                  <TeamOutlined />{" "}
                  {
                    props.generalGroup(
                      props.dataUserFriends,
                      props.dataUserFriend
                    ).length
                  }{" "}
                  nhóm chung
                </div>
              </div>
            </div>
          </div>
        )}
        {props.dataUserFriend?.group && (
          <div className="box-element">
            <div className="title">Thành viên nhóm</div>
            <div className="content-member">
              <div className="box-member">
                <div className="icon" onClick={handleClickShowAllgeneralGroup}>
                  <TeamOutlined /> {props.dataUserFriend?.members?.length} thành
                  viên
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="box-element">
          <div className="title">Đơn hàng</div>
          <div className="content-order-info">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.is_orders_info && !valueChat.delete && (
                      <>
                        <OrderInfo size="two" value={valueChat} key={key} />
                      </>
                    )}
                  </>
                );
              })}
          </div>
          <div className="div-button" onClick={hanldeClickShowAllOrdersInfo}>
            Xem tất cả
          </div>
        </div>
        <div className="box-element">
          <div className="title">Ảnh</div>
          <Image.PreviewGroup>
            <div className="content-image-video">
              {props.valueChats &&
                props.valueChats.map((valueChat, key) => {
                  return (
                    valueChat.url &&
                    !valueChat.delete && (
                      <>
                        <div className="box-image-video" key={key}>
                          {valueChat.type === "video" ? (
                            <video src={valueChat.url} alt="not load" />
                          ) : (
                            <Image
                              src={valueChat.url}
                              alt="img not load"
                              className="image"
                            />
                          )}
                        </div>
                      </>
                    )
                  );
                })}
            </div>
            <div className="div-button" onClick={hanldeClickShowAllImage}>
              Xem tất cả
            </div>
          </Image.PreviewGroup>
        </div>
        <div className="box-element">
          <div className="title">File</div>
          <div className="content-file">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.file && !valueChat.delete && (
                      <>
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
          <div className="div-button" onClick={hanldeClickShowAllFile}>
            Xem tất cả
          </div>
        </div>
        <div className="box-element">
          <div className="title">Link</div>
          <div className="content-link">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.is_message_url && !valueChat.delete && (
                      <>
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
          <div className="div-button" onClick={hanldeClickShowAllLink}>
            Xem tất cả
          </div>
        </div>
        <div className="box-element">
          <div className="title">Thiểt lập bảo mật</div>
          {props.dataUserFriend?.group && (
            <div
              className="box-element-children"
              onClick={() => {
                handleClickOutGroup(props.dataUserMe);
              }}
            >
              <div>
                <ExportOutlined />
              </div>
              <div>Rời nhóm</div>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Nav4;
