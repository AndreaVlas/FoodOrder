import React, { useState } from "react";
// import DateTimePicker from "react-datetime-picker";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DatePicker = (props) => {
  const [value, setValue] = useState(new Date());
  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        value={props.value}
        minDate={value}
        minTime={new Date(0, 0, 0, 12)}
        maxTime={new Date(0, 0, 0, 20, 55)}
        shouldDisableDate={disableWeekends}
        onChange={(newValue) => {
          props.onChange(newValue);
        }}
      />
    </LocalizationProvider>
  );
  // const isWeekday = () => {
  //   const date = new Date();
  //   console.log(date);
  //   return date.getDay() !== 0 && date.getDay() !== 6;
  // };
  // return (
  //   <div>
  //     <DateTimePicker
  //       // onCalendarOpen={() => {
  //       //   console.log("here");
  //       // }}
  //       onChange={props.onChange}
  //       value={props.value}
  //       filterDate={isWeekday}
  //       minDate={new Date()}
  //     />
  //   </div>
  // );
};

export default DatePicker;
