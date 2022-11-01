import React from "react";
import "./OrderInfo.scss";

function OrderInfo(props) {
  const valueOdersInfo = {
    status: "Success",
    results: {
      code: "SGNS983262NT.595050186",
      soc: "2102040725580332",
      status: "0",
      status_name: "Huỷ",
      receiver: {
        name: "Chị Định (Đk)",
        phone: "098****294",
        address: "187/9 Mai Xuân Thưởng",
        formatted_address:
          "187/9 Mai Xuân Thưởng, Phường 14, Quận 6, Thành phố Hồ Chí Minh",
      },
      fee: {
        shipment: 16000,
        insurance: 0,
        return: 0,
        barter: 0,
        address: 0,
      },
      payer: "Người Gửi",
      amount: 418000,
      value: 418000,
      weight: 300,
      config: "Không Cho Xem Hàng",
      journeys: [
        {
          time: "2021-02-04T07:25:19+07:00",
          status: "Chờ Duyệt",
          province: "Thành phố Hồ Chí Minh",
          district: "Quận Tân Bình",
          note: "Tạo Đơn hàng",
        },
        {
          time: "2021-02-04T07:25:19+07:00",
          status: "Chờ Lấy Hàng",
          province: "Thành phố Hồ Chí Minh",
          district: "Quận Tân Bình",
          note: "Duyệt Đơn hàng",
        },
        {
          time: "2021-02-04T08:41:17+07:00",
          status: "Huỷ",
          province: "Thành phố Hồ Chí Minh",
          district: "Quận Tân Bình",
          note: "Hủy Đơn hàng",
        },
      ],
      notes: [
        {
          created_at: "2021-02-04T07:25:19+07:00",
          type: "5",
          note: "Trường Phường/Xã có thể chưa được chính xác.",
        },
      ],
      calllogs: [],
      last_sman: null,
      created_at: "2021-02-04T07:25:19+07:00",
      updated_at: "2021-02-04T08:41:17+07:00",
    },
  };

  const currencyUnitFormat = (value) => {
    const newValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newValue;
  };

  return (
    <>
      <div className="wraper-oders-info">
        <div className="title">
          Thông tin vận đơn {valueOdersInfo.results?.code}
        </div>
        <div className="box-content">
          <div className="box-1">Người nhận</div>
          <div className="box-2">
            <div>Họ tên: {valueOdersInfo.results?.receiver?.name}</div>
            <div>Số điện thoại: {valueOdersInfo.results?.receiver?.phone}</div>
            <div>
              Địa chỉ: {valueOdersInfo.results?.receiver?.formatted_address}
            </div>
          </div>
        </div>
        <div className="box-content">
          <div className="box-1">Người gửi</div>
          <div className="box-2">
            <div>Họ tên: Lê Thanh Ân</div>
            <div>Số điện thoại: 0898999907</div>
            <div>
              Địa chỉ: Dương Quảng Hàm, Phường 15, Quận Gò Vấp, Thành Phố Hồ Chí
              Minh
            </div>
          </div>
        </div>
        <div className="box-content">
          <div className="box-1">Thông tin đơn hàng</div>
          <div className="box-2">
            <div>Ngày tạo đơn: {valueOdersInfo.results?.created_at}</div>
            <div>
              Tiền thu hộ:{" "}
              {currencyUnitFormat(`${valueOdersInfo.results?.amount}`)} vnd
            </div>
            <div>{valueOdersInfo.results?.config}</div>
          </div>
        </div>
        <div className="box-content">
          <div className="box-1">Trạng thái đơn hàng</div>
          <div className="box-2">
            <div>
              Trạng thái:{" "}
              {
                valueOdersInfo?.results?.journeys[
                  valueOdersInfo?.results?.journeys?.length - 1
                ]?.status
              }
            </div>
            <div>
              Thời gian:{" "}
              {
                valueOdersInfo?.results?.journeys[
                  valueOdersInfo?.results?.journeys?.length - 1
                ]?.time
              }
            </div>
            <div>
              Địa chỉ đơn hàng:{" "}
              {
                valueOdersInfo?.results?.journeys[
                  valueOdersInfo?.results?.journeys?.length - 1
                ]?.province
              }
              ,{" "}
              {
                valueOdersInfo?.results?.journeys[
                  valueOdersInfo?.results?.journeys?.length - 1
                ]?.district
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
