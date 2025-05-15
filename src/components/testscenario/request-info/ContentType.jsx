import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function ContentType() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Content Type</InputLabel>
      <Select value={value} label="Choose Type" onChange={handleChange}>
        <MenuItem value="json">JSON</MenuItem>
        <MenuItem value="xml">XML</MenuItem>
      </Select>
    </FormControl>
  );
}
