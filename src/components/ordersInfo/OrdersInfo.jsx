import React from "react";
import "./OrderInfo.scss";
import axios from "axios";
import { message, Tooltip } from "antd";
import { LinkOutlined } from "@ant-design/icons";

function OrderInfo(props) {
  const makeMinutes = (value) => {
    if (-1 < value && value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };
  const newValueChats = (valueApiOrderInfoApi, value, valueChats) => {
    const newValueChats = valueChats.map((valueChat) => {
      if (valueChat.id === value.id) {
        return { ...valueChat, information_order_info: valueApiOrderInfoApi };
      } else {
        return valueChat;
      }
    });
    props.setValueChats(newValueChats);
    localStorage.setItem(
      value.recipients.id_user,
      JSON.stringify(newValueChats)
    );
  };
  const getApiOrderInfo = () => {
    var config = {
      method: "get",
      url: `https://api.mysupership.vn/v1/partner/orders/info?code=${props.numberOrder}&type=1'`,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMGU5NTI2Nzc5Y2Y3Nzk2ZTY3ZjllNGQzZmNkZDg0Yzk0OWY4M2IxOTQxMzM1YTQwODQ2NGQwMDU4NzNiMDM3NDAwMDM1MjRhZTZlMjJhIn0.eyJhdWQiOiIxIiwianRpIjoiZGYwZTk1MjY3NzljZjc3OTZlNjdmOWU0ZDNmY2RkODRjOTQ5ZjgzYjE5NDEzMzVhNDA4NDY0ZDAwNTg3M2IwMzc0MDAwMzUyNGFlNmUyMmEiLCJpYXQiOjE2NjAwMzY1NDgsIm5iZiI6MTY2MDAzNjU0OCwiZXhwIjoxNjkxNTcyNTQ4LCJzdWIiOiI0MTMxMSIsInNjb3BlcyI6W119.01rKRfFAVw-3G-8FLNo2TGvNVjdNZE1LaxjRqKJ7FKL2NT-s2iZS-oRnYetm3wZPVc-dDPiG3b1ptPXyN0noOcBiT5VFQaP2T_jEFZdLJeas-mL9bOtqmWnseyP6wtqjfFEI3HBSZLCgIZDSYZY8XRZdCCwq5zxXocHywfpXVoDrAPJSa64YY-nD6YJo6FThtBh_LHfdGQ51j_qH8OChyF3O0TiCUmlDD8G0K_91wtw1KgvAmn6XM5H3oCqCWZEmKqaukkXh_4rI5hlAQN-0CarkLbU0wKMmnkr_hPqdjvBeGOaCYwzB9yRGlTLf-YBBqprpvNNs4FBi1cBp7oTag___KPifAP_kyjbtn853yh05t2mdw62HnKHX4PdrUBjuR68zrBOnORXqd5ft5djdC_REbfonojqUpVhK51IOmx6RMcl13DUIlUisb3T4shJrm66lzVTSzH_tqyhqxxx7_v1vWKydQBVRYPxnoiA3P5fHPYk-KH_FMJa0IAxNojjhtl6O8u9myfYLlF-htHYjNlsn3syEKGkpfKgMEhIj9FQzHvHvgxOyVvhmK30lePZ_WvIWXOdn42vhSfNjy7p3wOqwY4fHoAiNrqnJgMRAWFJUFNcHL4Xi_zQ8f4u10sNvyg8jyA7uK-bVfGR8ghT8WKcKLPlR-6FMFoTBGpxmPyo",
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        newValueChats(response.data, props.value, props.valueChats);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const conditionGetApiOrdersInfo = (value) => {
    console.log(1);
    if (value.information_order_info) {
      return false;
    } else {
      console.log(true);
      return true;
    }
  };

  const handleClickOderCode = (value) => {
    console.log("coppy order code");
    message.success({
      content: "Sao Chép thành công",
      style: {
        marginTop: "30vh",
      },
    });
    navigator.clipboard.writeText(value);
  };

  if (conditionGetApiOrdersInfo(props.value)) {
    getApiOrderInfo();
  }
  const currencyUnitFormat = (value) => {
    const newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newValue;
  };
  const handleClickSeeMore = (value) => {
    const newValueChats = props.valueChats.map((valueChat) => {
      if (valueChat.id === value.id) {
        return { ...valueChat, see_more_order_code: true };
      } else {
        return valueChat;
      }
    });
    console.log(newValueChats[0].see_more_order_code);
    props.setValueChats(newValueChats);
  };
  const handleClickCollapse = (value) => {
    console.log("chạy");
    const newValueChats = props.valueChats.map((valueChat) => {
      if (valueChat.id === value.id) {
        return { ...valueChat, see_more_order_code: false };
      } else {
        return valueChat;
      }
    });
    console.log(newValueChats[0].see_more_order_code);
    props.setValueChats(newValueChats);
  };

  return (
    <>
      {props.size === "one" &&
        props.value.information_order_info?.status === "Success" && (
          <div className="wraper-oders-info">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip placement="top" title="Nhấn vào để sao chép">
                  <div
                    className="title"
                    onClick={() =>
                      handleClickOderCode(
                        props.value.information_order_info?.results?.code
                      )
                    }
                  >
                    {props.value.information_order_info?.results?.code}
                  </div>
                </Tooltip>
                <a href="https://supership.vn/" target="blank">
                  <div className="link-target">
                    Link <LinkOutlined />
                  </div>
                </a>
              </div>
              {!props.value?.see_more_order_code ? (
                <div
                  className="see-more"
                  onClick={() => {
                    console.log("see more");
                    handleClickSeeMore(props.value);
                  }}
                >
                  Xem thêm
                </div>
              ) : (
                <div
                  className="see-more"
                  onClick={() => handleClickCollapse(props.value)}
                >
                  Thu gọn
                </div>
              )}
            </div>
            {props.value?.see_more_order_code && (
              <>
                <div className="box-content">
                  <div className="box-2">
                    <span>
                      Họ tên người gửi:{" "}
                      {
                        props.value.information_order_info?.results?.receiver
                          ?.name
                      }
                    </span>{" "}
                    <span>
                      {
                        props.value.information_order_info?.results?.receiver
                          ?.phone
                      }
                    </span>
                    <div>
                      Địa chỉ:{" "}
                      {
                        props.value.information_order_info?.results?.receiver
                          ?.formatted_address
                      }
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="box-2">
                    <span>Họ tên người nhận: Lê Thanh Ân</span>{" "}
                    <span>0898999907</span>
                    <div>
                      Địa chỉ: Dương Quảng Hàm, Phường 15, Quận Gò Vấp, Thành
                      Phố Hồ Chí Minh
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="box-2">
                    <div>
                      Ngày tạo đơn:{" "}
                      {props.value.information_order_info?.results?.created_at}
                    </div>
                    <div>
                      Tiền thu hộ:{" "}
                      {currencyUnitFormat(
                        `${props.value.information_order_info?.results?.amount}`
                      )}{" "}
                      vnd
                    </div>
                    <div>
                      {props.value.information_order_info?.results?.config}
                    </div>
                  </div>
                </div>
                <div className="box-content">
                  <div className="box-2">
                    <div>
                      Trạng thái:
                      {
                        props.value.information_order_info?.results?.journeys[
                          props.value.information_order_info?.results?.journeys
                            ?.length - 1
                        ]?.status
                      }
                    </div>
                    <div>
                      Thời gian:
                      {
                        props.value.information_order_info?.results?.journeys[
                          props.value.information_order_info?.results?.journeys
                            ?.length - 1
                        ]?.time
                      }
                    </div>
                    <div>
                      Địa chỉ đơn hàng:
                      {
                        props.value.information_order_info?.results?.journeys[
                          props.value.information_order_info?.results?.journeys
                            ?.length - 1
                        ]?.province
                      }
                      ,
                      {
                        props.value.information_order_info?.results?.journeys[
                          props.value.information_order_info?.results?.journeys
                            ?.length - 1
                        ]?.district
                      }
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      {props.size === "one" &&
        props.value.information_order_info?.status === "Error" && (
          <>
            <div className="wraper-oders-info" style={{ width: "fit-content" }}>
              <Tooltip placement="top" title="Nhấn vào để sao chép">
                <div
                  className="title"
                  onClick={() => handleClickOderCode(props.value.message_url)}
                >
                  {props.value.message_url}
                </div>
              </Tooltip>
            </div>
            <div className="box-content" style={{ paddingLeft: "10px" }}>
              Không tìm kiếm được đơn hàng
            </div>
          </>
        )}
      {props.size === "two" &&
        props.value.information_order_info?.status === "Success" && (
          <div className="wraper-oders-info-two">
            <Tooltip placement="top" title="Nhấn vào để sao chép">
              <div
                className="title"
                onClick={() =>
                  handleClickOderCode(
                    props.value.information_order_info?.results?.code
                  )
                }
              >
                {props.value.information_order_info?.results?.code}
              </div>
            </Tooltip>
            <a href="https://supership.vn/" target="blank">
              <div className="box-content">
                <div className="box-2">
                  <span>
                    Họ tên:{" "}
                    {
                      props.value.information_order_info?.results?.receiver
                        ?.name
                    }
                  </span>{" "}
                  <span>
                    {
                      props.value.information_order_info?.results?.receiver
                        ?.phone
                    }
                  </span>
                </div>
              </div>
              <div className="box-content">
                <div className="box-2">
                  <div>
                    Tiền thu hộ:{" "}
                    {currencyUnitFormat(
                      `${props.value.information_order_info?.results?.amount}`
                    )}{" "}
                    vnd
                  </div>
                </div>
              </div>
              <div className="box-content">
                <div className="box-2">
                  <div>
                    Trạng thái:
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.status
                    }
                  </div>
                  <div>
                    Thời gian:
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.time
                    }
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {props.value?.date}-{props.value?.month + 1}-
                  {props.value?.year} {props.value?.hours}:
                  {makeMinutes(props.value?.minutes)}
                </div>
              </div>
            </a>
          </div>
        )}
      {props.size === "three" &&
        props.value.information_order_info?.status === "Success" && (
          <div className="wraper-oders-info">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip placement="top" title="Nhấn vào để sao chép">
                  <div
                    className="title"
                    onClick={() =>
                      handleClickOderCode(
                        props.value.information_order_info?.results?.code
                      )
                    }
                  >
                    {props.value.information_order_info?.results?.code}
                  </div>
                </Tooltip>
                <a href="https://supership.vn/" target="blank">
                  <div className="link-target">
                    Link <LinkOutlined />
                  </div>
                </a>
              </div>
            </div>
            <>
              {/* <div className="box-content">
                <div className="box-2">
                  <span>
                    Họ tên người gửi:{" "}
                    {
                      props.value.information_order_info?.results?.receiver
                        ?.name
                    }
                  </span>{" "}
                  <span>
                    {
                      props.value.information_order_info?.results?.receiver
                        ?.phone
                    }
                  </span>
                  <div>
                    Địa chỉ:{" "}
                    {
                      props.value.information_order_info?.results?.receiver
                        ?.formatted_address
                    }
                  </div>
                </div>
              </div> */}
              <div className="box-content">
                <div className="box-2">
                  <div>
                    Ngày tạo đơn:{" "}
                    {props.value.information_order_info?.results?.created_at}
                  </div>
                  <div>
                    Tiền thu hộ:{" "}
                    {currencyUnitFormat(
                      `${props.value.information_order_info?.results?.amount}`
                    )}{" "}
                    vnd
                  </div>
                  <div>
                    {props.value.information_order_info?.results?.config}
                  </div>
                </div>
              </div>
              <div className="box-content">
                <div className="box-2">
                  <div>
                    Trạng thái:
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.status
                    }
                  </div>
                  <div>
                    Thời gian:
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.time
                    }
                  </div>
                  <div>
                    Địa chỉ đơn hàng:
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.province
                    }
                    ,
                    {
                      props.value.information_order_info?.results?.journeys[
                        props.value.information_order_info?.results?.journeys
                          ?.length - 1
                      ]?.district
                    }
                  </div>
                </div>
              </div>
            </>
          </div>
        )}
      {props.size === "three" &&
        props.value.information_order_info?.status === "Error" && (
          <>
            <div className="wraper-oders-info" style={{ width: "fit-content" }}>
              <Tooltip placement="top" title="Nhấn vào để sao chép">
                <div
                  className="title"
                  onClick={() => handleClickOderCode(props.value.message_url)}
                >
                  {props.value.message_url}
                </div>
              </Tooltip>
            </div>
            <div className="box-content" style={{ paddingLeft: "10px" }}>
              Không tìm kiếm được đơn hàng
            </div>
          </>
        )}
    </>
  );
}

export default OrderInfo;
