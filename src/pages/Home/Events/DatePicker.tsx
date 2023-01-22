import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as DP } from "@mui/x-date-pickers/DatePicker";
import { useSearchParams } from "react-router-dom";

function DatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DP
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          const prevData = Object.fromEntries([...searchParams]);
          if (newValue) {
            setSearchParams({
              ...prevData,
              date: newValue?.format("D-MMM-YY") || "",
            });
          } else {
            delete prevData.date;
            setSearchParams(prevData);
          }
        }}
        renderInput={(params) => (
          <TextField {...params} size="small" autoComplete="off" fullWidth />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
