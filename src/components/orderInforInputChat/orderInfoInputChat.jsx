import React from "react";
import "./orderInfoInputChat.scss";
import axios from "axios";
import { LinkOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import { message, Tooltip } from "antd";

function OrderInfoInputchat(props) {
  const [valueApiOrderinfo, setValueApiOrderinfo] = useState("");
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
        console.log(props.numberOrder);
        console.log(response.data);
        setValueApiOrderinfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getApiOrderInfo();
  }, [props.numberOrder]);

  const currencyUnitFormat = (value) => {
    const newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newValue;
  };

  const handleClickOderCode = (value) => {
    message.success({
      content: "Sao Chép thành công",
      style: {
        marginTop: "30vh",
      },
    });
    navigator.clipboard.writeText(value);
  };

  console.log(valueApiOrderinfo);
  return (
    <>
      {valueApiOrderinfo && valueApiOrderinfo?.status === "Success" && (
        <div className="wraper-oders-info-input-Chat">
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
                  onClick={() => {
                    handleClickOderCode(valueApiOrderinfo.results?.code);
                  }}
                >
                  {valueApiOrderinfo.results?.code}
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
            <div className="box-content">
              <div className="box-2">
                <span>
                  Họ tên người gửi: {valueApiOrderinfo?.results?.receiver?.name}
                  ,{" "}
                </span>
                <span>{valueApiOrderinfo?.results?.receiver?.phone}</span>
                <span>
                  {valueApiOrderinfo?.results?.receiver?.formatted_address}
                </span>
              </div>
            </div>
            <div className="box-content">
              <div className="box-2">
                <span>
                  Ngày tạo đơn: {valueApiOrderinfo?.results?.created_at},{" "}
                </span>
                <span>
                  Tiền thu hộ:{" "}
                  {currencyUnitFormat(`${valueApiOrderinfo?.results?.amount}`)}{" "}
                  vnd,{" "}
                </span>
                <span>
                  Trạng thái:{" "}
                  {
                    valueApiOrderinfo?.results?.journeys[
                      valueApiOrderinfo?.results?.journeys?.length - 1
                    ]?.status
                  }
                </span>
              </div>
            </div>
            <div className="box-2"></div>
          </>
        </div>
      )}
      {valueApiOrderinfo && valueApiOrderinfo.status === "Error" && (
        <>
          <div className="wraper-oders-info-input-Chat">
            <div
              className="box-content"
              style={{ paddingLeft: "10px", color: "var(--B60)" }}
            >
              Không tìm kiếm được đơn hàng
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default OrderInfoInputchat;
