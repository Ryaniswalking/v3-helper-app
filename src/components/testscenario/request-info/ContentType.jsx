import { useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const formatToContentType = {
  JSON: "json",
  XML: "xml",
  Other: "",
};

export default function ContentType({ format, setFormData }) {
  const contentType = formatToContentType[format] || "";
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        content_type: contentType,
      },
    }));
  }, [format]);
  return (
    <FormControl fullWidth>
      <InputLabel>Content Type</InputLabel>
      <Select
        value={contentType}
        label="Content Type"
        disabled
    >
        <MenuItem value="json">JSON</MenuItem>
        <MenuItem value="xml">XML</MenuItem>
        <MenuItem value="">Other</MenuItem>
      </Select>
    </FormControl>
  );
}
