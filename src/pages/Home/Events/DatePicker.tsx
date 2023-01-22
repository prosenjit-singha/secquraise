import * as React from "react";
import { format } from "date-fns";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DP } from "@mui/x-date-pickers/DatePicker";

function DatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);
  console.info(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DP
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} size="small" fullWidth />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
