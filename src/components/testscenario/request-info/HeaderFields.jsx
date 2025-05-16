import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

export default function HeaderFields({ formData, setFormData }) {
  const headersObject = formData.request_info.headers || {};
  const headersArray = Object.entries(headersObject).map(([key, value]) => ({
    key,
    value,
  }));

  const [headers, setHeaders] = React.useState(headersArray);

  const updateFormDataHeaders = (headerList) => {
    const headerObject = headerList.reduce((acc, { key, value }) => {
      if (key) acc[key] = value;
      return acc;
    }, {});
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        headers: headerObject,
      },
    }));
  };

  const handleHeaderChange = (index, field, value) => {
    const updated = [...headers];
    updated[index][field] = value;
    setHeaders(updated);
    updateFormDataHeaders(updated);
  };

  const addHeader = () => {
    const updated = [...headers, { key: "", value: "" }];
    setHeaders(updated);
    updateFormDataHeaders(updated);
  };

  const deleteHeader = (index) => {
    const updated = headers.filter((_, i) => i !== index);
    setHeaders(updated);
    updateFormDataHeaders(updated);
  };

  return (
    <Box mt={1}>
      <Grid container spacing={1} alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Headers
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            onClick={addHeader}
            color="primary"
            aria-label="Add Header"
          >
            <Add />
          </IconButton>
        </Grid>
      </Grid>

      {/* Scrollable container */}
      <Box
        sx={{
          maxHeight: 200,
          minHeight: 200,
          overflowY: "auto",
          pr: 1,
          mb: 2,
          border: "1px solid #ccc",
          borderRadius: 1,
        }}
      >
        {headers.map((header, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 2,
              mb: 1,
              mt: 1,
              mx: 1,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <IconButton
                  color="error"
                  onClick={() => deleteHeader(index)}
                  aria-label="Delete Header"
                >
                  <Delete />
                </IconButton>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Header Key"
                  value={header.key}
                  onChange={(e) =>
                    handleHeaderChange(index, "key", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Header Value"
                  value={header.value}
                  onChange={(e) =>
                    handleHeaderChange(index, "value", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
