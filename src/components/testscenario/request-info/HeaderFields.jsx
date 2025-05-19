import React, { useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

export default function HeaderFields({ formData, setFormData, format }) {
  const formatContentTypes = {
    JSON: "application/json",
    XML: "application/xml",
    Other: "",
  };

  const [headers, setHeaders] = React.useState([]);

  const objectToArray = (obj) =>
    Object.entries(obj).map(([key, value]) => ({ key, value }));

  const headersArrayToObject = (arr) =>
    arr.reduce((acc, { key, value }) => {
      if (key) acc[key] = value;
      return acc;
    }, {});

  const syncFormDataHeaders = (headerArray) => {
    const customHeaders = headersArrayToObject(headerArray);
    const formatHeaders = {
      Accept: formatContentTypes[format] || "",
      "Content-Type": formatContentTypes[format] || "",
    };
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        headers: {
          ...formatHeaders,
          ...customHeaders,
        },
      },
    }));
  };

  useEffect(() => {
    const currentHeaders = formData?.request_info?.headers || {};
    const customHeaders = Object.fromEntries(
      Object.entries(currentHeaders).filter(
        ([key]) => key !== "Accept" && key !== "Content-Type"
      )
    );
    setHeaders(objectToArray(customHeaders));

    const formatHeaders = {
      Accept: formatContentTypes[format] || "",
      "Content-Type": formatContentTypes[format] || "",
    };

    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        headers: {
          ...formatHeaders,
          ...customHeaders,
        },
      },
    }));
  }, [format]);

  const addHeader = () => {
    const updated = [...headers, { key: "", value: "" }];
    setHeaders(updated);
    syncFormDataHeaders(updated);
  };

  const handleHeaderChange = (index, field, value) => {
    const updated = [...headers];
    updated[index][field] = value;
    setHeaders(updated);
    syncFormDataHeaders(updated);
  };

  const deleteHeader = (index) => {
    const updated = [...headers];
    updated.splice(index, 1);
    setHeaders(updated);
    syncFormDataHeaders(updated);
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle1" gutterBottom>
        Headers
      </Typography>

      {/* Display Accept and Content-Type */}
      <Box ml={1} mb={2}>
        <Typography variant="body2">
          <strong>Accept:</strong> {formatContentTypes[format] || ""}
        </Typography>
        <Typography variant="body2">
          <strong>Content-Type:</strong> {formatContentTypes[format] || ""}
        </Typography>
      </Box>

      {/* Custom Headers Section */}
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="subtitle2">Custom Headers</Typography>
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

      <Box
        sx={{
          maxHeight: 200,
          minHeight: 100,
          overflowY: "auto",
          pr: 1,
          mb: 2,
          border: "1px solid #ccc",
          borderRadius: 1,
        }}
      >
        {headers.map(({ key, value }, index) => (
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
            <Grid container spacing={1} alignItems="center">
              <Grid item size={{ xs: 2 }}>
                <IconButton
                  color="error"
                  onClick={() => deleteHeader(index)}
                  aria-label="Delete Header"
                >
                  <Delete />
                </IconButton>
              </Grid>
              <Grid item size={{ xs: 5 }}>
                <TextField
                  fullWidth
                  label="Header Key"
                  value={key}
                  onChange={(e) =>
                    handleHeaderChange(index, "key", e.target.value)
                  }
                />
              </Grid>
              <Grid item size={{ xs: 5 }}>
                <TextField
                  fullWidth
                  label="Header Value"
                  value={value}
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
