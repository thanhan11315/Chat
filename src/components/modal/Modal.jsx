import React from "react";
import Modal from "antd/lib/modal/Modal";
import { Image } from "antd";
import "./ModalInformation.scss";
import { EditOutlined } from "@ant-design/icons";
import ImageGroup from "../imageGroup/ImageGroup";

function ModalInformation(props) {
  const hanldeClickUpdateProfile = () => {
    props.setModalUpdateInformation(true);
    props.handleCancelModalInformation();
  };

  const handleClickSentmgs = (dataModalInformation) => {
    const newDataUserFriend = props.dataUserFriends.find(
      (dataUserFriend) =>
        dataUserFriend.id_user === dataModalInformation.id_user
    );
    if (newDataUserFriend) {
      props.setDataUserFriend(newDataUserFriend);
    } else {
      const newDataUserFriend = props.dataUserFriendsApi.find(
        (dataUserFriendApi) =>
          dataUserFriendApi.id_user === dataModalInformation.id_user
      );
      props.setDataUserFriend(newDataUserFriend);
    }
    props.handleCancelModalInformation();
  };

  return (
    <>
      {console.log(props.dataModalInformation)}
      {props.dataModalInformation?.group ? (
        <Modal
          open={props.modalInformation}
          title="Thông tin nhóm"
          onCancel={props.handleCancelModalInformation}
          footer={[]}
        >
          <div className="wrapper-modal-information">
            <div className="profilePhoto">
              <div className="avatar-profile">
                <Image
                  className="img-profile"
                  alt=""
                  src={props.dataModalInformation?.avatar}
                />
              </div>
              <div className="user-profile-preview">
                <div className="box-img-avatar">
                  <ImageGroup dataUserFriend={props.dataModalInformation} />
                </div>
                <div className="preview-content">
                  <div className="name-content">
                    {props.dataModalInformation?.name}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box-btn-sentmgs"
              onClick={() => handleClickSentmgs(props.dataModalInformation)}
            >
              <div className="btn-sentmgs">Nhắn tin</div>
            </div>
            <div className="box-profile-information">
              <div className="header-profile-detail">
                Thành viên ({props.dataModalInformation.members?.length})
              </div>
            </div>
            <div className="box-update-profile"></div>
          </div>
        </Modal>
      ) : (
        <Modal
          open={props.modalInformation}
          title="Thông tin tài khoản"
          onCancel={props.handleCancelModalInformation}
          footer={[]}
        >
          <div className="wrapper-modal-information">
            <div className="profilePhoto">
              <div className="avatar-profile">
                <Image
                  className="img-profile"
                  alt=""
                  src={props.dataModalInformation?.cover_photo}
                />
              </div>
              <div className="user-profile-preview">
                <div className="box-img-avatar">
                  <Image
                    className="img-avatar"
                    alt=""
                    src={props.dataModalInformation?.avatar}
                  />
                </div>
                <div className="preview-content">
                  <div className="name-content">
                    {props.dataModalInformation?.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-btn-sentmgs">
              {props.dataModalInformation?.id_user !==
                props.dataUserMe.id_user && (
                <div
                  className="btn-sentmgs"
                  onClick={() => handleClickSentmgs(props.dataModalInformation)}
                >
                  Nhắn tin
                </div>
              )}
            </div>
            <div className="box-profile-information">
              <div className="header-profile-detail">Thông tin cá nhân</div>
              <div className="box-user-profile-detail">
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Điện Thoại</span>
                  <span className="content-profile-detail">
                    {" "}
                    {props.dataModalInformation?.phone_number}{" "}
                  </span>
                </div>
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Giới Tính</span>
                  <span className="content-profile-detail">
                    {props.dataModalInformation?.gender}
                  </span>
                </div>
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Ngày Sinh</span>
                  <span className="content-profile-detail">
                    {props.dataModalInformation?.birthday}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="box-update-profile">
              {props.dataModalInformation?.id_user ===
                props.dataUserMe.id_user && (
                <div className="button-update-profile">
                  <div
                    className="button-update-profile-children"
                    onClick={hanldeClickUpdateProfile}
                  >
                    <EditOutlined />
                    <span>Cập nhập thông tin cá nhân</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ModalInformation;
