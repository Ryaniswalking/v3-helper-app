import { Grid, TextField, Typography, Button, Box, Paper } from "@mui/material";
import ActionFields from "./ActionFields";

export default function ValidationFields({ formData, setFormData }) {
  const handleStatusCodeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      validation: {
        ...prev.validation,
        status_code: Number(e.target.value),
      },
    }));
  };

  const parseInput = (value) => {
    try {
      const parsed = JSON.parse(value);

      if (typeof parsed === "object" && parsed !== null) {
        return parsed;
      }
    } catch (e) {}

    if (!isNaN(value) && value.trim() !== "") return Number(value);
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === "null") return null;
    return value;
  };

  const handleActionChange = (index, name, value) => {
    let parsedValue = "expected" === name ? parseInput(value) : value;

    const updatedActions = [...formData.validation.actions];
    updatedActions[index] = { ...updatedActions[index], [name]: parsedValue };
    setFormData((prev) => ({
      ...prev,
      validation: {
        ...prev.validation,
        actions: updatedActions,
      },
    }));
  };

  const addAction = () => {
    setFormData((prev) => ({
      ...prev,
      validation: {
        ...prev.validation,
        actions: [
          ...prev.validation.actions,
          {
            path: "",
            message: "",
            type: "",
            mode: "",
            expected: "",
            ignore_fields: [],
          },
        ],
      },
    }));
  };

  const removeAction = (index) => {
    setFormData((prev) => {
      const updated = [...prev.validation.actions];
      updated.splice(index, 1);
      return {
        ...prev,
        validation: {
          ...prev.validation,
          actions: updated,
        },
      };
    });
  };

  return (
    <>
      <Typography variant="subtitle1" mt={4}>
        Validation
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="status_code"
            label="Expected Status Code"
            value={formData.validation.status_code}
            onChange={handleStatusCodeChange}
          />
        </Grid>
      </Grid>

      <Box mt={2}>
        <Paper
          elevation={2}
          sx={{
            maxHeight: 300,
            overflowY: "auto",
            p: 2,
            backgroundColor: "#fafafa",
            border: "1px solid #ccc",
          }}
        >
          {formData.validation.actions.map((action, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                mb: 2,
                p: 2,
                borderLeft: "5px solid #1976d2",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Typography variant="subtitle2" gutterBottom>
                Validation #{idx + 1}
              </Typography>
              <ActionFields
                action={action}
                index={idx}
                onChange={handleActionChange}
                onRemove={removeAction}
              />
            </Paper>
          ))}
        </Paper>
        <Button variant="outlined" onClick={addAction} sx={{ mt: 2 }}>
          Add Validation Action
        </Button>
      </Box>
    </>
  );
}
