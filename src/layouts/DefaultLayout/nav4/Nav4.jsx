import React from "react";
import {
  BellOutlined,
  EditOutlined,
  EllipsisOutlined,
  ExportOutlined,
  PaperClipOutlined,
  SettingOutlined,
  ShareAltOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
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
      status: `${newDataUserFriend?.members.length} th??nh vi??n`,
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
    setTimeout(() => {
      props.setValueChats("");
      localStorage.setItem(props.dataUserFriend.id_user, JSON.stringify(""));
      const newDataUserFriends = props.dataUserFriends?.filter(
        (dataUserFriend) =>
          dataUserFriend?.id_user !== props.dataUserFriend?.id_user
      );
      props.setDataUserFriendsAll(newDataUserFriends);
      console.log(newDataUserFriends);
    }, 3000);
  };

  const handleClickEditName = () => {
    props.setModalChangeName(true);
  };

  const handleClickImage = (value) => {
    document.querySelector(".box-show-image").style.display = "block";
    props.setValueImage(value);
    // props.setUrlFile(
    //   `${renderLinkFile(props.value?.file?.name)}${props.value?.file?.url_file}`
    // );
  };

  return (
    <Col className={`box-nav-4 ${props.hiddenRightNav && "hiddenRightNav"}`}>
      <div className="title-nav">Th??ng tin h???i tho???i</div>
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
            <div className="icon" onClick={() => handleClickEditName()}>
              <EditOutlined />
            </div>
          </div>
          <Row className="box-icon-content">
            {props.dataUserFriend?.notification ? (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={() => turnOffNotification()}>
                    <BellOutlined />
                  </div>
                </div>
                <div className="content">T???t th??ng b??o</div>
              </div>
            ) : (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={() => turnOnNotification()}>
                    <BellOutlined />
                  </div>
                </div>
                <div className="content">B???t th??ng b??o</div>
              </div>
            )}
            {props.dataUserFriend?.pin_conversation ? (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={() => UnpinConversation()}>
                    <PaperClipOutlined />
                  </div>
                </div>
                <div className="content">B??? Ghim h???i tho???i</div>
              </div>
            ) : (
              <div className="icon-content">
                <div className="box-icon">
                  <div className="icon" onClick={() => Pinconversation()}>
                    <PaperClipOutlined />
                  </div>
                </div>
                <div className="content">Ghim h???i tho???i</div>
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
                  <div className="content">Th??m th??nh vi??n</div>
                </div>
                <div className="icon-content ">
                  <div className="box-icon ">
                    <div className="icon not-use">
                      <SettingOutlined />
                    </div>
                  </div>
                  <div className="content">Qu???n l?? nh??m</div>
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
                  <div className="content">T???o nh??m tr?? chuy???n</div>
                </div>
              )
            )}
          </Row>
        </div>
        {!props.dataUserFriend?.group && (
          <div className="box-element">
            <div className="content-member">
              <div className="box-member">
                <div
                  className="icon"
                  onClick={() => handleClickShowAllMember()}
                >
                  <TeamOutlined />{" "}
                  {
                    props.generalGroup(
                      props.dataUserFriends,
                      props.dataUserFriend
                    ).length
                  }{" "}
                  nh??m chung
                </div>
              </div>
            </div>
          </div>
        )}
        {props.dataUserFriend?.group && (
          <div className="box-element">
            <div className="title">Th??nh vi??n nh??m</div>
            <div className="content-member">
              <div className="box-member">
                <div
                  className="icon"
                  onClick={() => handleClickShowAllgeneralGroup()}
                >
                  <TeamOutlined /> {props.dataUserFriend?.members?.length} th??nh
                  vi??n
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="box-element">
          <div className="title">????n h??ng</div>
          <div className="content-order-info">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.is_orders_info &&
                      !valueChat.delete &&
                      !valueChat.evict && (
                        <>
                          <div
                            className="box-wrapper-share"
                            style={{ position: "relative" }}
                          >
                            <OrderInfo
                              setValueChats={props.setValueChats}
                              valueChats={props.valueChats}
                              size="two"
                              value={valueChat}
                              key={key}
                              dataUserMe={props.dataUserMe}
                            />
                            <div className="box-share">
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  props.handleClickShareNavright(valueChat);
                                }}
                              >
                                <ShareAltOutlined />
                              </div>
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  props.handleClickDotsNavright(e, valueChat);
                                }}
                              >
                                <EllipsisOutlined />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                  </>
                );
              })}
          </div>
          <div
            className="div-button"
            onClick={() => hanldeClickShowAllOrdersInfo()}
          >
            Xem t???t c???
          </div>
        </div>
        <div className="box-element">
          <div className="title">???nh</div>
          <div className="content-image-video">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  valueChat.url &&
                  !valueChat.delete &&
                  !valueChat.evict && (
                    <>
                      <div
                        className="box-image-video"
                        key={key}
                        onClick={() => {
                          handleClickImage(valueChat);
                        }}
                      >
                        <div className="box-background"></div>
                        <img
                          src={valueChat.url}
                          alt="img not load"
                          className="image"
                        />
                        <div className="box-share">
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              props.handleClickShareNavright(valueChat);
                            }}
                          >
                            <ShareAltOutlined />
                          </div>
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              props.handleClickDotsNavright(e, valueChat);
                            }}
                          >
                            <EllipsisOutlined />
                          </div>
                        </div>
                      </div>
                    </>
                  )
                );
              })}
          </div>
          <div className="div-button" onClick={() => hanldeClickShowAllImage()}>
            Xem t???t c???
          </div>
        </div>
        <div className="box-element">
          <div className="title">File</div>
          <div className="content-file">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.file &&
                      !valueChat.delete &&
                      !valueChat.evict && (
                        <div
                          className="box-wrapper-share"
                          style={{ position: "relative" }}
                        >
                          <RenderFile
                            navRight={true}
                            key={key}
                            renderImageFile={props.renderImageFile}
                            value={valueChat}
                            bytesToSize={props.bytesToSize}
                            setUrlFile={props.setUrlFile}
                            urlFile={props.urlFile}
                            setValueFile={props.setValueFile}
                            size="one"
                          />
                          <div className="box-share">
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                props.handleClickShareNavright(valueChat);
                              }}
                            >
                              <ShareAltOutlined />
                            </div>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                props.handleClickDotsNavright(e, valueChat);
                              }}
                            >
                              <EllipsisOutlined />
                            </div>
                          </div>
                        </div>
                      )}
                  </>
                );
              })}
          </div>
          <div className="div-button" onClick={() => hanldeClickShowAllFile()}>
            Xem t???t c???
          </div>
        </div>
        <div className="box-element">
          <div className="title">Link</div>
          <div className="content-link">
            {props.valueChats &&
              props.valueChats.map((valueChat, key) => {
                return (
                  <>
                    {valueChat.is_message_url &&
                      !valueChat.delete &&
                      !valueChat.evict && (
                        <>
                          <div
                            className="box-wrapper-share"
                            style={{ position: "relative" }}
                          >
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
                            <div className="box-share">
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  props.handleClickShareNavright(valueChat);
                                }}
                              >
                                <ShareAltOutlined />
                              </div>
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  props.handleClickDotsNavright(e, valueChat);
                                }}
                              >
                                <EllipsisOutlined />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                  </>
                );
              })}
          </div>
          <div className="div-button" onClick={() => hanldeClickShowAllLink()}>
            Xem t???t c???
          </div>
        </div>
        <div className="box-element">
          <div className="title">Thi???t l???p b???o m???t</div>
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
              <div>R???i nh??m</div>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Nav4;
