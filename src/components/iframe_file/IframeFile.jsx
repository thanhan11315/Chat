import React from "react";
import "./IframeFile.scss";
import AvatarAnLe from "../../assets/images/AvatarAnLe.jpg";
import { CloseOutlined, DownloadOutlined } from "@ant-design/icons";
function IframeFile() {
  return (
    <>
      <div className="box_iframe_footer">
        <div className="box-iframe">
          <iframe
            name="iframe_file"
            src="https://drive.google.com/viewerng/viewer?url=https://mdl.supership.net/strgs/files/SuperShip%20-%20CHI%CC%81NH%20SA%CC%81CH%20BO%CC%82%CC%80I%20HOA%CC%80N.pdf?ref=MySuperShip&embedded=true&hl=vi&retry=0"
            className="iframe-file"
            title="file"
          />
        </div>
        <div className="box-footer">
          <div className="box-1">
            <div className="image">
              <img src={AvatarAnLe} alt="img not load" />
            </div>
            <div className="box-1-1">
              <div className="title">SuperShip - Chính Sách Bồi hoàn'.pdf</div>
              <div className="content">
                Lê Thanh Ân - 11/10/2022 lúc 17:49 - 5Mb
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="icon-download">
              <DownloadOutlined />
            </div>
            <div className="brick" />
            <div className="icon-close">
              <CloseOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IframeFile;
