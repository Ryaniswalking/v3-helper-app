import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function RequestType() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Request Type</InputLabel>
      <Select value={value} label="Choose Type" onChange={handleChange}>
        <MenuItem value="post">POST</MenuItem>
        <MenuItem value="get">GET</MenuItem>
      </Select>
    </FormControl>
  );
}
