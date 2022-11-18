import React from "react";
import "./OrderInfo.scss";
import axios from "axios";

function OrderInfo(props) {
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
    if (value.information_order_info) {
      return false;
    } else {
      return true;
    }
  };

  const handleClickOderCode = (value) => {
    navigator.clipboard.writeText(value);
  };

  if (conditionGetApiOrdersInfo(props.value)) {
    getApiOrderInfo();
  }
  const currencyUnitFormat = (value) => {
    const newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newValue;
  };
  return (
    <>
      {props.size === "one" && (
        <div className="wraper-oders-info">
          <div
            className="title"
            onClick={handleClickOderCode(
              props.value.information_order_info?.results?.code
            )}
          >
            Thông tin vận đơn{" "}
            {props.value.information_order_info?.results?.code}
          </div>
          <div className="box-content">
            <div className="box-1">Người nhận</div>
            <div className="box-2">
              <div>
                Họ tên:{" "}
                {props.value.information_order_info?.results?.receiver?.name}
              </div>
              <div>
                Số điện thoại:{" "}
                {props.value.information_order_info?.results?.receiver?.phone}
              </div>
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
            <div className="box-1">Người gửi</div>
            <div className="box-2">
              <div>Họ tên: Lê Thanh Ân</div>
              <div>Số điện thoại: 0898999907</div>
              <div>
                Địa chỉ: Dương Quảng Hàm, Phường 15, Quận Gò Vấp, Thành Phố Hồ
                Chí Minh
              </div>
            </div>
          </div>
          <div className="box-content">
            <div className="box-1">Thông tin đơn hàng</div>
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
              <div>{props.value.information_order_info?.results?.config}</div>
            </div>
          </div>
          <div className="box-content">
            <div className="box-1">Trạng thái đơn hàng</div>
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
        </div>
      )}
      {props.size === "two" && (
        <div className="wraper-oders-info-two">
          <div className="title">
            {props.value.information_order_info?.results?.code}
          </div>
          <div className="box-content">
            <div className="box-2">
              <div>
                Họ tên:{" "}
                {props.value.information_order_info?.results?.receiver?.name}
              </div>
              <div>
                Số điện thoại:{" "}
                {props.value.information_order_info?.results?.receiver?.phone}
              </div>
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
              {props.value?.date}-{props.value?.month + 1}-{props.value?.year}{" "}
              {props.value?.hours}:{props.value?.minutes}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderInfo;
