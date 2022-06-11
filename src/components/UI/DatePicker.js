import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const DatePicker = (props) =>{
  return (
    <div>
      <DateTimePicker onChange={props.onChange} value={props.value} />
    </div>
  );
}

export default DatePicker;