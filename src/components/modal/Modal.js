import React from "react";
import Modal from "antd/lib/modal/Modal";
import AvatarAn from "../../assets/images/AvatarAn.jpg";
import "./ModalInformation.css";

function ModalInformation(props) {
  return (
    <>
      <Modal
        open={props.modalInformation}
        title="Thông tin tài khoản"
        onCancel={props.handleCancelModalInformation}
        footer={[]}
      >
        <div className="handleClickButonPhonehandleClickButonPhone">
          <div className="profilePhoto">
            <div className="avatar-profile">
              <img className="img-profile" alt="not load img" src={AvatarAn} />
            </div>
            <div className="user-profile-preview">
              <div className="box-img-avatar">
                <img className="img-avatar" alt="not load img" src={AvatarAn} />
              </div>
              <div className="preview-content">
                <div className="name-content">Lê Thanh Ân</div>
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
                <span className="content-profile-detail"> 0898999907 </span>
              </div>
              <div className="user-profile-detail">
                <span className="title-profile-detail">Giới Tính</span>
                <span className="content-profile-detail"> Nam </span>
              </div>
              <div className="user-profile-detail">
                <span className="title-profile-detail">Ngày Sinh</span>
                <span className="content-profile-detail"> 22/02/2022 </span>
              </div>
            </div>
          </div>
          <div className="box-profile-action"></div>
        </div>
      </Modal>
    </>
  );
}

export default ModalInformation;
