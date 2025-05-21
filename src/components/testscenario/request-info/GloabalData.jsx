import { Box, TextField, Typography, Paper, Button, Grid } from "@mui/material";

export default function GlobalData({ formData, setFormData }) {
  const addNewGlobalData = () => {
    setFormData((prev) => ({
      ...prev,
      global_data: [
        ...prev.global_data,
        {
          path: "",
          label: "",
          conditional: "",
        },
      ],
    }));
  };

  const removeGlobalData = (index) => {
    setFormData((prev) => {
      const updated = [...prev.global_data];
      updated.splice(index, 1);
      return {
        ...prev,
        global_data: updated,
      };
    });
  };

  const handleGlobalDataChange = (index, field, value) => {
    const updated = [...formData.global_data];
    updated[index] = { ...updated[index], [field]: value };
    
    setFormData((prev) => ({
      ...prev,
      global_data: updated 
    }));
  };

  return (
    <Box>
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
        <Button variant="outlined" onClick={addNewGlobalData} sx={{ mt: 2 }}>
          Add Global Data
        </Button>
        {formData.global_data.map((globalData, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              mb: 2,
              p: 2,
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Global Data #{index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  name="path"
                  label="path"
                  value={globalData.path}
                  onChange={(e) =>
                    handleGlobalDataChange(index, "path", e.target.value)
                  }
                />
              </Grid>
              <Grid item size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  name="label"
                  label="label"
                  value={globalData.label}
                  onChange={(e) =>
                    handleGlobalDataChange(index, "label", e.target.value)
                  }
                />
              </Grid>
              <Grid item size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  name="conditional"
                  label="conditional"
                  value={globalData.conditional}
                  onChange={(e) =>
                    handleGlobalDataChange(index, "conditional", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Paper>
    </Box>
  );
}
