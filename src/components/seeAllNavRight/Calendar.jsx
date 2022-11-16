import { DatePicker } from "antd";
import React, { useState } from "react";
const { RangePicker } = DatePicker;
const CalendarFilter = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
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
  return (
    <RangePicker
      format={dateFormat}
      value={dates || value}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};
export default CalendarFilter;
