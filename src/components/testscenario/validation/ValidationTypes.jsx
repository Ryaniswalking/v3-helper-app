import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function ValidationTypes({ index, onChange, action }) {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    const newType = event.target.value;
    setType(newType);
    onChange(index, "type", newType);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Validation Type</InputLabel>
      <Select value={type} label="Validation Type" onChange={handleChange}>
        <MenuItem value="DEFAULT">DEFAULT</MenuItem>;
        <MenuItem value="FORMAT">FORMAT</MenuItem>;
        <MenuItem value="COMPARE">COMPARE</MenuItem>;
        <MenuItem value="SOMETHING">SOMETHING</MenuItem>;
        <MenuItem value="ELSE">ESLE</MenuItem>;
      </Select>
    </FormControl>
  );
}
