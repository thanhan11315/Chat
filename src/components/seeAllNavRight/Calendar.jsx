import { DatePicker } from "antd";
import React, { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;
const CalendarFilter = (props) => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  console.log(value);
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
    console.log(dates);
    console.log(value);
  };
  const dateFormat = "DD/MM/YYYY";
  const timeChange = (value) => {
    const [beginTime, endTime] = value;
    console.log(
      moment(beginTime).format("DD/MM/YYYY"),
      moment(endTime).format("DD/MM/YYYY")
    );
    props.setTime1(moment(beginTime).format("DD/MM/YYYY"));
    props.setTime2(moment(endTime).format("DD/MM/YYYY"));
    props.setShowFilterDate(false);
    console.log(value);
    console.log(props.time1);
    console.log(props.time2);
  };

  return (
    <RangePicker
      format={dateFormat}
      value={dates || value}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => {
        setValue(val);
        timeChange(val);
      }}
      onOpenChange={onOpenChange}
    />
  );
};
export default CalendarFilter;
