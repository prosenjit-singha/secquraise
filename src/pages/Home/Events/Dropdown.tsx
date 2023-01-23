import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props<T> = {
  label: string;
  value: string;
  list: T[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClick: (label: string, value: string) => void;
};

function Dropdown<T extends string>({
  label,
  value,
  list,
  setValue,
  onClick,
}: Props<T>) {
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    onClick(label, e.target.value);
  };
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
