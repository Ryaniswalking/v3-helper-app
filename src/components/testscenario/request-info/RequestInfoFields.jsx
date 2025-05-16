import { Box, TextField, Grid, Typography } from "@mui/material";
import RequestType from "./RequestType";
import ContentType from "./ContentType";
import HeadersFields from "./HeaderFields";
import RequestEditor from "./RequestEditor";

export default function RequestInfoFields({ formData, setFormData, format }) {
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
        p: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="subtitle1">Request Info</Typography>
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
          <ContentType format={format} />
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
          <HeadersFields
            formData={formData}
            setFormData={setFormData}
            format={format}
          />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="subtitle1">Request Body</Typography>
          <RequestEditor
            format={format}
            formData={formData}
            setFormData={setFormData}
            />
        </Grid>
      </Grid>
    </Box>
  );
}
