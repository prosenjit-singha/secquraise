import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useEffect } from "react";

type Props<T> = {
  label: string;
  value?: string;
  defaultValue?: string;
  list: T[];
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  onClick: (label: string, value: string) => void;
};

function Dropdown<T extends string>({
  label,
  list,
  defaultValue = "",
  onClick,
}: Props<T>) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    onClick(label, e.target.value);
  };

  useEffect(() => {
    if (!!defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <FormControl sx={{ minWidth: 120, width: "50%" }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {list.map((v) => (
          <MenuItem key={v} value={v}>
            {v}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
