import React from "react";
import Modal from "antd/lib/modal/Modal";
import { Image } from "antd";
import "./ModalInformation.scss";

function ModalInformation(props) {
  return (
    <>
      {props.dataModalInformation.group ? (
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
                  src={props.dataModalInformation.avatar}
                />
              </div>
              <div className="user-profile-preview">
                <div className="box-img-avatar">
                  <Image
                    className="img-avatar"
                    alt=""
                    src={props.dataModalInformation.avatar}
                  />
                </div>
                <div className="preview-content">
                  <div className="name-content">
                    {props.dataModalInformation.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-btn-sentmgs">
              <div className="btn-sentmgs">Nhắn tin</div>
            </div>
            <div className="box-profile-information">
              <div className="header-profile-detail">
                Thành viên ({props.dataModalInformation.members.length})
              </div>
            </div>
            <div className="box-profile-action"></div>
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
                  src={props.dataModalInformation.cover_photo}
                />
              </div>
              <div className="user-profile-preview">
                <div className="box-img-avatar">
                  <Image
                    className="img-avatar"
                    alt=""
                    src={props.dataModalInformation.avatar}
                  />
                </div>
                <div className="preview-content">
                  <div className="name-content">
                    {props.dataModalInformation.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-btn-sentmgs">
              <div className="btn-sentmgs">Nhắn tin</div>
            </div>
            <div className="box-profile-information">
              <div className="header-profile-detail">Thông tin cá nhân</div>
              <div className="box-user-profile-detail">
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Điện Thoại</span>
                  <span className="content-profile-detail">
                    {" "}
                    {props.dataModalInformation.phone_number}{" "}
                  </span>
                </div>
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Giới Tính</span>
                  <span className="content-profile-detail">
                    {props.dataModalInformation.gender}
                  </span>
                </div>
                <div className="user-profile-detail">
                  <span className="title-profile-detail">Ngày Sinh</span>
                  <span className="content-profile-detail">
                    {props.dataModalInformation.birthday}{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="box-profile-action"></div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ModalInformation;
