import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

export default function RequestType({ setFormData }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        type: e.target.value,
      },
    }));
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Request Type</InputLabel>
      <Select value={value} label="Choose Type" onChange={handleChange}>
        <MenuItem value="POST">POST</MenuItem>
        <MenuItem value="GET">GET</MenuItem>
      </Select>
    </FormControl>
  );
}
