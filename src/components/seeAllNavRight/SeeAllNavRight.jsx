import React from "react";
import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import { Col, Image } from "antd";
import "./SeeAllNavRight.scss";
import RenderFile from "../../components/file/RenderFile";
import LinkPreview from "../../components/linkPreview/LinkPreview";
import OrderInfo from "../ordersInfo/OrdersInfo";
// import InPutSearch from "../../components/inPutSearch/InPutSearch";
// import AvatarAnLe from "../../assets/images/AvatarAnLe.jpg";
function SeeAllNavRight(props) {
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
        <div className="box-choose-member-sent">
          <span>Người gửi</span>
          <span>
            <DownOutlined />
          </span>
        </div>
        {/* <div className="box-list-search">
          <div className="box-search">
            <InPutSearch />
          </div>
          <div className="box-member">
            <div className="box-member">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="image-member">
                  <img src={AvatarAnLe} alt="img not load" />
                </div>
                <div className="box-information">
                  <div className="name">"thanhan"</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="box-wrapper">
        <div className="box-element">
          {props.chooseSeeAllNavRight === "ordersInfo" && (
            <div className="content-order-info">
              {props.valueChats &&
                props.valueChats.map((valueChat, key) => {
                  return (
                    <>
                      {valueChat.is_orders_info && !valueChat.delete && (
                        <>
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
                {props.valueChats &&
                  props.valueChats.map((valueChat, key) => {
                    return (
                      valueChat.url &&
                      !valueChat.delete && (
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
                      )
                    );
                  })}
              </div>
            </Image.PreviewGroup>
          )}
          {props.chooseSeeAllNavRight === "files" && (
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
          )}
          {props.chooseSeeAllNavRight === "links" && (
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
          )}
        </div>
      </div>
    </Col>
  );
}
export default SeeAllNavRight;
