import { Box, TextField, Grid, Typography } from "@mui/material";
import RequestType from "./request-info/RequestType";
import ContentType from "./request-info/ContentType";
import HeadersFields from "./request-info/HeaderFields";

export default function RequestInfoFields({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      request_info: {
        ...prev.request_info,
        [name]: value,
      },
    }));
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h5">Request Info</Typography>
        </Grid>
        <Grid item size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="service"
            label="Service"
            value={formData.request_info.service}
            onChange={handleChange}
          />
        </Grid>
        <Grid item size={{ xs: 6 }}>
          <RequestType />
        </Grid>
        <Grid item size={{ xs: 6 }}>
          <ContentType />
        </Grid>
        <Grid item size={{ xs: 6 }}>
          <TextField
            fullWidth
            name="parameters"
            label="parameters"
            value={formData.request_info.parameters}
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <HeadersFields formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="body"
            label="t"
            value={formData.request_info.body}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
